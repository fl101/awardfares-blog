(function () {
  initCharts();

  document.addEventListener('drop', dropHandler);
  document.addEventListener('dragover', dragOverHandler);

  //------------------------------------------------------------------------------------
  // Helpers
  //------------------------------------------------------------------------------------

  function safeNumber(str) {
    return Number(str);
  }

  function safeDate(str) {
    return moment(str, 'YYYY-MM-DD');
  }

  function safeGet(key, def) {
    const value = localStorage.getItem(key);
    return value == null ? def : value;
  }

  function safeSet(key, value) {
    localStorage.setItem(key, value);
  }

  //------------------------------------------------------------------------------------
  // Drag Drop
  //------------------------------------------------------------------------------------

  function dragOverHandler(ev) {
    ev.preventDefault();
  }

  function dropHandler(ev) {
    ev.stopPropagation();
    ev.preventDefault();

    const files = ev.dataTransfer.files;
    const file = files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, {type: 'array'});
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const arr = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      let balance = safeNumber(safeGet('eurobonus.balance', '0'));
      balance = safeNumber(prompt('Current EuroBonus "Points for Use" balance:', balance));
      safeSet('eurobonus.balance', balance);
      parseData(arr, balance);
    };
    reader.readAsArrayBuffer(file);
  }

  //------------------------------------------------------------------------------------
  // Parser
  //------------------------------------------------------------------------------------

  function parseData(data, balance) {

    const flypremium = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let flypremiumForecast = 0;

    const categories = {
      Flights: 0,
      Amex: 0,
      MasterCard: 0,
      Avis: 0,
      Shopping: 0,
      Transfer: 0,
      Redemption: 0,
      Status: 0,
      Other: 0,
    };
    
    let acc = balance;
    const points = [{ x: new Date, y: acc }];
    const log = [];

    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      if (row.length < 4) {
        continue;
      }

      const date = safeDate(row[0]);
      if (!date.isValid()) {
        alert('Found invalid date: ' + row[0]);
        continue;
      }

      let description = row[1].split('\n').join('; ');
      const pointsType = row[3];
      let extraPoints = pointsType == 'Extra Points' ? safeNumber(row[2]) : 0;
      const basePoints = (pointsType == 'Status Points' || pointsType == 'Basic Points') ? safeNumber(row[2]) : 0;
      const isRefund = description.includes('Refund');
      const isStatus = description.includes('Status');
      const isTransfer = description.includes('Transfer');

      // Some old upgrade transactions report a positive number
      if (extraPoints > 0 && description.includes('Points used')) {
        extraPoints *= -1;
      }

      // Update points data
      if (!isStatus) {
        acc -= extraPoints;
        points.push({
          x: date.toDate(),
          y: acc,
        });
      }

      // Update categories data
      let k = [];
      if (basePoints) {
        if (description.includes('Status')) {
          categories.Status += basePoints;
          k.push('Status');
        } else {
          categories.Flights += basePoints;
          k.push('Flight');
        }
      } else if (description.includes('Refund')) {
        categories.Redemption -= extraPoints;
        k.push('Refund');
      } else if (description.includes('Amex')) {
        categories.Amex += extraPoints;
        k.push('Amex');
      } else if (description.includes('MasterCard')) {
        categories.MasterCard += extraPoints;
        k.push('MasterCard');
      } else if (description.includes('Avis')) {
        categories.Avis += extraPoints;
        k.push('Avis');
      } else if (description.includes('Shop')) {
        categories.Shopping += extraPoints;
        k.push('Shopping');
      } else if (description.includes('Transfer')) {
        categories.Transfer += extraPoints;
        k.push('Transfer');
      } else if (extraPoints < 0) {
        categories.Redemption -= extraPoints;
        k.push('Redemption');
      } else {
        categories.Other += extraPoints;
        k.push('Other');
      }
  
      // Update flypremium data
      let isFlyPremium = false;
      if (extraPoints > 0 && !isRefund && !isStatus && !isTransfer) {
        const monthsOffset = moment().startOf('month').diff(date.clone().startOf('month'), 'month');
        isFlyPremium = true;
        if (monthsOffset <= 24) {
          const startMonth = Math.max(0, 12 - monthsOffset);
          const endMonth = 24 - monthsOffset;
          for (let j = startMonth; j <= endMonth; j++) {
            flypremium[j] += extraPoints || basePoints;
          }
          if (monthsOffset < 6) {
            flypremiumForecast += extraPoints || basePoints;
          }
        }
      }

      log.push(`
        <tr>
          <td>${date.format('YYYY-MM-DD')}</td>
          <td>${extraPoints}</td>
          <td>${basePoints}</td>
          <td title="${k.join(', ')}">${description}</td>
          <td>${isFlyPremium ? 'Yes' : ''}</td>
        </tr>
      `);
    }

    const monthlyAverage = Math.round(flypremiumForecast / 6);
    
    const flypremiumBalance = flypremium[12];

    let highestFlypremiumBalance = 0;
    for (let i = 0; i <= 12; i++) {
      highestFlypremiumBalance = Math.max(highestFlypremiumBalance, flypremium[i]);
    }
    
    let flypremiumStatus = 'SAS Plus, Scandinavia, 1 round-trip';
    if (highestFlypremiumBalance >= 200000) {
      flypremiumStatus = 'SAS Plus/Business, World, Unlimited';
    } else if (highestFlypremiumBalance >= 100000) {
      flypremiumStatus = 'SAS Plus, World, Unlimited';
    } else if (highestFlypremiumBalance >= 50000) {
      flypremiumStatus = 'SAS Plus, Europe, Unlimited';
    }

    document.querySelector('#log > tbody').innerHTML = log.join('\n');
    document.getElementById('delta').innerText = points[0].y - points[points.length - 1].y;
    document.getElementById('flypremiumBalance').innerText = flypremiumBalance;
    document.getElementById('flypremiumStatus').innerText = flypremiumStatus;
    document.getElementById('flypremiumForecast').innerText = monthlyAverage;
    document.getElementById('flypremiumHighest').innerText = highestFlypremiumBalance;

    drawPoints(points);
    drawCategories(categories);
    drawFlyPremium(flypremium, monthlyAverage);

    document.querySelector('[id=point-history]').scrollIntoView();
  }

  //------------------------------------------------------------------------------------
  // Charts
  //------------------------------------------------------------------------------------

  function initCharts() {
    drawPoints([]);
    drawCategories({});
    drawFlyPremium([]);  
  }

  function drawPoints(data) {
    const ctx = document.getElementById('pointsChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          data,
          lineTension: 0.1,
          backgroundColor: 'rgba(41,128,185,0.5)',
          borderColor: 'rgba(41,128,185,1.0)',
          pointRadius: 2
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            type: 'time',
          }]
        }
      }
    });
  }

  function drawCategories(data) {
    const ctx = document.getElementById('categoriesChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        datasets: [{
          data: Object.keys(data).map(function (e) { return data[e] }),
          backgroundColor: [
            '#9b59b6',
            '#3498db',
            '#34495e',
            '#e74c3c',
            '#f39c12',
            '#7f8c8d',
            '#c0392b',
            '#2ecc71',
            '#f39c12',
            '#16a085',
          ],
        }],
        labels: Object.keys(data)
      },
      options: {
        legend: {
          display: false
        }
      }
    });
  }

  function drawFlyPremium(data, forecast) {
    data = data.map(function (e, i) {
      return { x: moment().startOf('month').subtract(12, 'months').add(i, 'months').toDate(), y: e };
    });

    forecast = data.map(function (e, i) {
      return { x: e.x, y: i > 12 ? Math.round(e.y + forecast * (i - 12)) : e.y };
    });

    const ctx = document.getElementById('flypremiumChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          data: data,
          lineTension: 0.1,
          backgroundColor: 'rgba(52,73,94,0.3)',
          borderColor: 'rgba(52,73,94,1)',
          label: 'Balance'
        },{
          data: forecast,
          lineTension: 0.1,
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: 'rgba(255,73,94,1)',
          label: 'Forecast'
        },{
          data: data.map(function (e) { return { x: e.x, y: 200000 }; }),
          label: 'Business for Go',
          fill: false,
          pointRadius: 0,
          borderColor: '#e74c3c',
          borderWidth: 1,
        },{
          data: data.map(function (e) { return { x: e.x, y: 100000 }; }),
          label: 'Plus for Go',
          fill: false,
          pointRadius: 0,
          borderColor: '#e74c3c',
          borderWidth: 1,
        },{
          data: data.map(function (e) { return { x: e.x, y: 50000 }; }),
          label: 'Plus for Go (Europe)',
          fill: false,
          pointRadius: 0,
          borderColor: '#e74c3c',
          borderWidth: 1,
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            type: 'time',
          }]
        }
      }
    });
  }

})();

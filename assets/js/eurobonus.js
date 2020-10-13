(function () {
  initCharts();

  document.addEventListener('drop', dropHandler);
  document.addEventListener('dragover', dragOverHandler);

  //------------------------------------------------------------------------------------
  // Helpers
  //------------------------------------------------------------------------------------

  function safeNumber(str) {
    return Number(str.replace(' ', ''));
  }

  const MONTHS = moment().locale('en').localeData().months();
  const LOCALES = ['sv-se', 'nb-no', 'en', 'da-dk'];

  function safeMonth(str) {
    for (let localeIdx in LOCALES) {
      const locale = LOCALES[localeIdx];
      const localeData = moment().locale(locale).localeData();
      const months = localeData.months().map(function (e) { return e.toLowerCase() });
      const short = localeData.monthsShort().map(function (e) { return e.toLowerCase() });
      for (let monthIdx = 0; monthIdx < 12; monthIdx++) {
        if (str == months[monthIdx]) return MONTHS[monthIdx];
        if (str == short[monthIdx]) return MONTHS[monthIdx];
      }
    }
    throw new Error('Unknown month: ' + str);
  }

  function safeDate(str) {
    str = str.toLowerCase();
    str = str.split(' ');
    str[0] = safeMonth(str[0]);
    str = str.join(' ');
    return moment(str, 'MMMM D, YYYY');
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
      const sheet = workbook.Sheets['My EuroBonus Activity'];
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

    const flypremium = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

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

    // Only process activity within the last 12 months
    // const cutoff = moment().startOf('month').subtract(12, 'months');

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

      // if (cutoff.isAfter(date)) {
      //   continue;
      // }

      let description = row[1].split('\n').join('; ');
      let extraPoints = safeNumber(row[2]);
      const basePoints = safeNumber(row[3]);
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
        categories.Flights += basePoints;
        k.push('Flight');
      } else if (description.includes('Status')) {
        categories.Status += extraPoints;
        k.push('Status');
      } else if (description.includes('Refund')) {
        categories.Redemption += extraPoints;
        k.push('Redemption');
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
        categories.Redemption += extraPoints;
        k.push('Redemption');
      } else {
        categories.Other += extraPoints;
        k.push('Other');
      }
  
      // Update flypremium data
      let isFlyPremium = false;
      if (extraPoints > 0 && !isRefund && !isStatus && !isTransfer) {
        const monthsOffset = moment().startOf('month').diff(date.clone().startOf('month'), 'month');
        if (monthsOffset <= flypremium.length) {
          isFlyPremium = true;
          for (let j = 0; j <= 12 - monthsOffset; j++) {
            flypremium[j] += extraPoints;
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

    const flypremiumBalance = flypremium[0];
    let flypremiumStatus = 'SAS Plus, Scandinavia, 1 round-trip';
    if (flypremiumBalance >= 200000) {
      flypremiumStatus = 'SAS Plus/Business, World, Unlimited';
    } else if (flypremiumBalance >= 100000) {
      flypremiumStatus = 'SAS Plus, World, Unlimited';
    } else if (flypremiumBalance >= 50000) {
      flypremiumStatus = 'SAS Plus, Europe, Unlimited';
    }

    document.querySelector('#log > tbody').innerHTML = log.join('\n');
    document.getElementById('delta').innerText = points[0].y - points[points.length - 1].y;
    document.getElementById('flypremiumBalance').innerText = flypremiumBalance;
    document.getElementById('flypremiumStatus').innerText = flypremiumStatus;

    drawPoints(points);
    drawCategories(categories);
    drawFlyPremium(flypremium.map(function (e, i) {
      return { x: moment().startOf('month').add(i, 'months').toDate(), y: e };
    }));

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

  function drawFlyPremium(data) {
    const ctx = document.getElementById('flypremiumChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          data,
          lineTension: 0.1,
          backgroundColor: 'rgba(52,73,94,0.5)',
          borderColor: 'rgba(52,73,94,1.0)',
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

initCharts();

//------------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------------

function safeNumber(str) {
  return Number(str.replace(' ', ''));
}

function safeDate(str) {
  str = str.replace('Januari', 'January');
  str = str.replace('Februari', 'February');
  str = str.replace('Mars', 'March'); 
  str = str.replace('Maj', 'May');
  str = str.replace('Juni', 'June');
  str = str.replace('Juli', 'July');
  str = str.replace('Aug', 'August');
  str = str.replace('Oktober', 'October');
  return moment(str, 'MMMM D, YYYY');
}

function safeGet(key, def) {
  var value = localStorage.getItem(key);
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

  var files = ev.dataTransfer.files;
  var file = files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    var data = new Uint8Array(e.target.result);
    var workbook = XLSX.read(data, {type: 'array'});
    var sheet = workbook.Sheets['My EuroBonus Activity'];
    var arr = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    var balance = safeNumber(safeGet('eurobonus.balance', '0'));
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

  var flypremium = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  var categories = {
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
  
  var acc = balance;
  var points = [{ x: new Date, y: acc }];

  var log = [];

  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var date = safeDate(row[0]);
    if (!date.isValid()) {
      alert('Found invalid date: ' + row[0]);
      continue;
    }
    var description = row[1].split('\n').join('; ');
    var extraPoints = safeNumber(row[2]);
    var basePoints = safeNumber(row[3]);

    
    // Only handle activity within the last 12 months
    var cutoff = moment().startOf('month').subtract(12, 'months');
    if (cutoff.isSameOrAfter(date)) {
      continue;
    }
    
    var isRefund = description.includes('Refund');
    var isStatus = description.includes('Status');

    // Update points data
    if (!isStatus) {
      acc -= extraPoints;
      points.push({
        x: date.toDate(),
        y: acc,
      });
    }
    
    // Update categories data
    if (basePoints) {
      categories.Flights += basePoints;
    } else if (description.includes('Status')) {
      categories.Status += extraPoints;
    } else if (description.includes('Refund')) {
      categories.Redemption += extraPoints;
    } else if (description.includes('Amex')) {
      categories.Amex += extraPoints;
    } else if (description.includes('MasterCard')) {
      categories.MasterCard += extraPoints;
    } else if (description.includes('Avis')) {
      categories.Avis += extraPoints;
    } else if (description.includes('Shop')) {
      categories.Shopping += extraPoints;
    } else if (description.includes('Transfer')) {
      categories.Transfer += extraPoints;
    } else if (extraPoints < 0) {
      categories.Redemption += extraPoints;
    } else {
      categories.Other += extraPoints;
    }

    // Update flypremium data
    var isFlyPremium = false;
    if (extraPoints > 0 && !isRefund && !isStatus) {
      var monthsOffset = moment().diff(date, 'month');
      if (monthsOffset <= flypremium.length) {
        isFlyPremium = true;
        for (var j = 0; j < 13 - monthsOffset; j++) {
          flypremium[j] += extraPoints;
        }
      }
    }

    log.push(`${isFlyPremium ? '!' : 'X'} - ${date.format('YYYY-MM-DD')} - ${extraPoints} - ${basePoints} - ${description}`);
  }

  document.getElementById('delta').innerText = points[0].y - points[points.length - 1].y;
  document.getElementById('flypremiumBalance').innerText = flypremium[0];

  drawPoints(points);
  drawCategories(categories);
  drawFlyPremium(flypremium.map((e, i) => {
    return { x: moment().add(i, 'months').toDate(), y: e };
  }));

  document.getElementById('log').innerText = log.join('\n');
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
  var ctx = document.getElementById('pointsChart').getContext('2d');
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
  var ctx = document.getElementById('categoriesChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      datasets: [{
        data: Object.keys(data).map(e => data[e]),
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
  var ctx = document.getElementById('flypremiumChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [{
        data,
        lineTension: 0.1,
        backgroundColor: 'rgba(52,73,94,0.5)',
        borderColor: 'rgba(52,73,94,1.0)',
      },{
        data: data.map(e => ({ x: e.x, y: 200000 })),
        label: 'Business for Go',
        fill: false,
        pointRadius: 0,
        borderColor: '#e74c3c',
        borderWidth: 1,
      },{
        data: data.map(e => ({ x: e.x, y: 100000 })),
        label: 'Plus for Go',
        fill: false,
        pointRadius: 0,
        borderColor: '#e74c3c',
        borderWidth: 1,
      },{
        data: data.map(e => ({ x: e.x, y:  50000 })),
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

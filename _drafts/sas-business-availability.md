---
layout: post
title: "SAS Business Long-Haul Award: Summary"
tags: [News, Guide]
author: Philip
comments: true
hidden: true
---

<canvas id="chart" width="400" height="0"></canvas>

## Breakdown By Route
SAS long-haul business class award availability during the next 90 days. Click the link to explore award availability in AwardFares:

<table>
  <thead>
    <tr>
      <th>Route</th>
      <th>Outbound Seats</th>
      <th>Inbound Seats</th>
      <th>Total Seats</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Loading...</td>
    </tr>
  </tbody>
</table>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.bundle.min.js"></script>

<script>
  setTimeout(function () {
    const data = [{"route":"CPH-IAD / IAD-CPH","outbound":175,"inbound":135,"total":310},{"route":"CPH-ORD / ORD-CPH","outbound":161,"inbound":88,"total":249},{"route":"ARN-ORD / ORD-ARN","outbound":159,"inbound":104,"total":263},{"route":"CPH-EWR / EWR-CPH","outbound":107,"inbound":82,"total":189},{"route":"CPH-BOS / BOS-CPH","outbound":86,"inbound":67,"total":153},{"route":"CPH-NRT / NRT-CPH","outbound":77,"inbound":76,"total":153},{"route":"CPH-SFO / SFO-CPH","outbound":56,"inbound":62,"total":118},{"route":"ARN-EWR / EWR-ARN","outbound":60,"inbound":18,"total":78},{"route":"OSL-EWR / EWR-OSL","outbound":51,"inbound":47,"total":98},{"route":"CPH-PEK / PEK-CPH","outbound":48,"inbound":11,"total":59},{"route":"CPH-PVG / PVG-CPH","outbound":48,"inbound":47,"total":95},{"route":"CPH-MIA / MIA-CPH","outbound":23,"inbound":1,"total":24},{"route":"CPH-HKG / HKG-CPH","outbound":7,"inbound":16,"total":23},{"route":"OSL-MIA / MIA-OSL","outbound":3,"inbound":4,"total":7},{"route":"CPH-LAX / LAX-CPH","outbound":3,"inbound":0,"total":3},{"route":"ARN-MIA / MIA-ARN","outbound":2,"inbound":0,"total":2},{"route":"CPH-HND / HND-CPH","outbound":0,"inbound":0,"total":0}];
    
    var html = '';
    var outbound = 0;
    var inbound = 0;
    var total = 0;
    data.forEach(e => {
      const route = e.route.split('-').join(',').split(' / ').join('.');
      var url = `https://awardfares.com/search?${route};c:business;a:SK`
      html += `<tr><td><a href="${url}">${e.route}</a></td><td>${e.outbound}</td><td>${e.inbound}</td><td>${e.total}</td>`;
      outbound += e.outbound;
      inbound += e.inbound;
      total += e.total;
    });
    html += `<tr><td>Total</td><td>${outbound}</td><td>${inbound}</td><td>${total}</td>`;
    
    $('tbody').html(html);

    $('#chart').attr({ height: 200 });

    new Chart($('#chart'), {
      type: 'horizontalBar',
      data: {
        labels: data.map(e => e.route),
        datasets: [
          {
            label: 'Outbound',
            data: data.map(e => e.outbound),
            backgroundColor: '#0000FF'
          },
          {
            label: 'Inbound',
            data: data.map(e => e.inbound),
            backgroundColor: '#000099'
          },
        ]
      },
      options: {
        legend: {
          position: 'top',
        },
        scales: {
          xAxes: [{
            stacked: true,
          }],
          yAxes: [{
            stacked: true,
          }]
        }
      }
    });

  }, 1000);
  $.getJSON('https://awardfares.com/stats/sas-business.json', function(data) {
    console.log(data);
  });
</script>

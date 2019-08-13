---
layout: post
title: Ultimate Guide to Award Release Dates
tags: [guide]
author: Philip
comments: true
image: /assets/img/award-dates/image.png
---

One of the best ways of booking your perfect award trip is to plan far in advance. Even though most airlines generally release new award space continously throughout the year, it is always best to book as far in advance as possible. There are however two important things to consider:

1. Different airlines release award seats at different dates.
2. Different frequent flyer programs show seats at different dates.

For example, if you're using United to search for first class seats, then you will only be able to find awards up to 337 days in advance. However, as a EuroBonus member you can still book awards more than 337 days in advance. This is especially important to consider when going after highly sought after awards. Luckily AwardFares makes it super easy to find these since you're able to search across multiple frequent flyer programs at once!

## Award Search
Here are the number of days in advance that some popular frequent flyer program award search sites will show. Dates are updated automatically.

| Frequent Flyer Program | Days in advance | Date from today |
|------------------------|-----------------|-----------------|
| United MileagePlus     | 337             | <span></span>   |
| SAS EuroBonus          | 360             | <span></span>   |
| Avianca LifeMiles      | 360             | <span></span>   |
| Air Canada Aeroplan    | 355             | <span></span>   |


## Airlines
Here is a list of the number of days in advance you can find award space using AwardFares for all Star Alliance airlines. Dates are updated automatically.

| Airline               | Days in advance     | Date from today |
|-----------------------|---------------------|-----------------|
| Air Canada            | 355                 | <span></span>   |
| Air China             | 361                 | <span></span>   |
| Air India             | 337                 | <span></span>   |
| Air New Zealand       | 355                 | <span></span>   |
| ANA                   | 355                 | <span></span>   |
| Asiana                | 338                 | <span></span>   |
| Austrian              | 361                 | <span></span>   |
| Avianca               | 355                 | <span></span>   |
| Brussels              | 360                 | <span></span>   |
| COPA                  | 330                 | <span></span>   |
| Egyptair              | 360                 | <span></span>   |
| Ethiopian             | 331                 | <span></span>   |
| EVA Air               | 360                 | <span></span>   |
| LOT                   | 361                 | <span></span>   |
| Lufthansa             | 360, 180, 14        | <span></span>   |
| SAS                   | 330, 300            | <span></span>   |
| Singapore Airlines    | 355                 | <span></span>   |
| South African Airways | 358                 | <span></span>   |
| SWISS                 | 300                 | <span></span>   |
| TAP                   | 361                 | <span></span>   |
| Thai Airways          | 340, 90, 60         | <span></span>   |
| Turkish               | 354                 | <span></span>   |
| United                | 337                 | <span></span>   |

Notes:
- Lufthansa first class awards are available to other Star Alliance frequent flyer programs earliest 14 days in advance.
- Lufthansa long-haul business class awards are available earliest 180 days in advance.
- SAS releases 2 Plus awards within Europe at 330 days, and 4+ at 300 days.
- Thai releases Europe-Asia business 90 days in advance.
- Thai releases Europe-Asia first 60 days in advance.

<script>
(function () {
  function pad(value) {
    return String(value).length == 1 ? '0' + value : value;
  }
  function calculateDateFromToday(i) {
    var date = new Date(new Date().getTime() + (i * 24 * 3600 * 1000));
    return [
      date.getFullYear(), 
      pad(date.getMonth()+1),
      pad(date.getDate())
    ].join('-');
  }
  // Automagically calculate "date from today" for each table row
  document.querySelectorAll('td span').forEach(function (el, i) {
    var days = el.parentNode.previousElementSibling.innerText.split(',')[0];
    el.innerText = calculateDateFromToday(days);
  });
})();

</script>

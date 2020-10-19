---
layout: post
title: Introducing Search With Stops
tags: [News]
image: /assets/img/multistop/overview.png
hidden: true
---

Big news at AwardFares! Despite the current situation we've been hard at work building new features. One of the most requested improvements over the years has been to be able to search for full trips. You asked, and we listened. Introducing search with stops!

## Search With Stops

Simply type in your origin and destination and you will see {% raw %}<a class="af-dynamic-search-date" af-search-string="https://awardfares.com/search?CPH.SIN.{date};o:duration;so:asc">all the results</a>{% endraw %} that can take you to your destination, including layovers! This makes it much easier to find award availability for a destination, rather than searching individual flight segments manually.

<img src="/assets/img/multistop/search2.png" />

Expanding a result shows detailed information about each flight segment and any layovers included in the route.

<img src="/assets/img/multistop/result.png" />

You can also filter search results by {% raw %}<a class="af-dynamic-search-date" af-search-string="https://awardfares.com/search?CPH.HND.{date};o:duration;so:asc;x:2">number of stops</a>{% endraw %}. For those looking for the fastest route you can filter for non-stop flights. But for those looking to maximize their mileage you can also exclude routes with few stops.

<img src="/assets/img/multistop/stops2.png" />

## Alerts

In alerts we've also added a new filter for number of stops. Any existing alerts you have will automatically be set to only alert for non-stop flights. For any new alerts you set up you have to specify the number of stops.

<img src="/assets/img/multistop/alerts.png" />

---

Search with stops is now available to all Gold and Diamond accounts. [Try it now!](https://awardfares.com/search)

<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js"></script>
<script src="/assets/js/dynamic-search-date.js">

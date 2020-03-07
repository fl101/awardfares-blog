---
layout: post
title: "COVID-19 Travel Ban Tracker"
tags: [News, Tools]
author: Richard
comments: true
hidden: true
image: /assets/img/covid19-travelbans/overview.png
hide_image_in_post: true
---

If you're a frequent traveller it might be hard to keep track of different countries' travel bans as a result of the COVID-19 outbreak. We've put together this handy tool which can make it easier to visualize. Simply enter the nationality of the passport you're travelling on as well as the countries you've been to recently and how many days ago you were last there. Red countries are enforcing travel bans either for your nationality or for one of the countries you've recently been to, yellow countries are enforcing some type of restrictions (Such as quarantines or revoking visa on arrival).

For simplicity, in cases where only parts of a country is affected by the travel bans, such as Hong Kong only banning travellers who have been to certain parts of Italy, any travel to that country will result in the enforcing country being marked as banned. This means you might be able to travel to that country anyway, always check official sources before travelling.

The map currently does not take into account if you're a resident or national of the country you want to travel to, citizens of most countries are allowed to return home even if they've been in banned areas. This will be fixed in a future version.

# Instructions

1. Enter the nationality of the passport you're travelling on
2. Enter any countries you've visited recently and how many days ago you were there
3. If you're coming from a country, make sure you enter the number of days ago as 1 to observe rules regarding country of origin

Last updated: <span class="last-updated"></span>

<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.28/moment-timezone-with-data.min.js"></script>
 
<style>
  .destination > div {
    max-width: 50%;
    display: inline-block;
    margin-bottom: 10px
  }
  .country-selection {
    width: 70%;
  }
  .nationality-selection {
    max-width: 50%;
  }
</style>
<link rel="stylesheet" href="/assets/js/jvm/jquery-jvectormap-2.0.5.css" type="text/css" media="screen"/>
<div id="world-map" style="width: 100%; height: 450px; margin-top:20px"></div>
  <p class="nationality-selection">
    Nationality: <select class="country-selection" id="nationality-selection"></select>
  </p>
  <div id="trip-template" style="display: none;">
    <div>Country: <select class="country-selection"></select></div>
    <div>Days ago: <input class="time-ago" type="text" /></div>
  <button class="remove-country">X</button>
  </div>
  <div class="trip">
  </div>
  <div style="margin-top:15px">
    <button id="add-country">Add country</button>
  </div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://underscorejs.org/underscore-min.js"></script>
<script src="/assets/js/jvm/jquery-jvectormap-2.0.5.min.js"></script>
<script src="/assets/js/jvm/jquery-jvectormap-world-mill.js"></script>
<script src="/assets/js/travel-bans-map.js"></script>
<p>
Note that this tool is provided as an indication only and is not intended to replace official sources. Always check official sources of information before travelling. AwardFares does not assume any responsibility for the correctness of the information.
</p>

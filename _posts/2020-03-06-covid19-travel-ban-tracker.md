---
layout: post
title: "Keeping track of the travel bans during the COVID-19 outbreak"
tags: [News, Tools]
author: Richard
comments: true
hidden: true
image: /assets/img/covid19-travelbans/overview.png
---

If you're a frequent traveller it might be hard to keep track of different countries' travel bans as a result of the COVID-19 outbreak. We've put together this handy tool which can make it easier to visualize. Simply enter the nationality of the passport you're travelling on as well as the countries you've been to recently and how many days ago you were last there. Red countries are enforcing travel bans either for your nationality or for one of the countries you've recently been to, yellow countries are enforcing some type of restrictions (Such as quarantines or revoking visa on arrival).

 For simplicity, in cases where only parts of a country is affected by the travel bans, such as Hong Kong only banning travellers who have been to certain parts of Italy, any travel to that country will result in the enforcing country being marked as banned. This means you might be able to travel to that country anyway, always check official sources before travelling.

 Last updated: 2020-03-06 22:00 UTC

<link rel="stylesheet" href="/assets/js/jvm/jquery-jvectormap-2.0.5.css" type="text/css" media="screen"/>
<div id="world-map" style="width: 100%; height: 450px"></div>
  Citizenship: <select class="country-selection" id="nationality-selection"></select>
  <div id="trip-template" style="display: none;">
    <p>Country: <select class="country-selection"></select></p>
    <p>Days ago: <input class="time-ago" type="text" /></p>
  <button class="remove-country">X</button>
  </div>
  <div class="trip">
  </div>
  <button id="add-country">Add country</button>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://underscorejs.org/underscore-min.js"></script>
<script src="/assets/js/jvm/jquery-jvectormap-2.0.5.min.js"></script>
<script src="/assets/js/jvm/jquery-jvectormap-world-mill.js"></script>
<script src="/assets/js/travel-bans-map.js"></script>


Note that this tool is provided as an indication only and is not intended to replace official sources. Always check the rules before travelling. AwardFares does not assume any responsibility for the correctness of the information.

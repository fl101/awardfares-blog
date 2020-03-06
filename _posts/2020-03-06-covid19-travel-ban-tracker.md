---
layout: post
title: "Keeping track of the travel bans during the COVID-19 outbreak"
tags: [News, Guide]
author: Richard
comments: true
image: /assets/img/covid19/overview.png
hidden: true
---

Test

<link rel="stylesheet" href="/assets/js/jvm/jquery-jvectormap-2.0.5.css" type="text/css" media="screen"/>
<div id="world-map" style="width: 100%; height: 900px"></div>
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

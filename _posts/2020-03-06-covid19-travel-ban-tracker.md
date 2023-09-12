---
layout: post
title: "COVID-19 Travel Ban Tracker"
tags: [News, Tools, COVID-19]
author: Richard
image: /assets/img/covid19-travelbans/overview.png
hide_image_in_post: true
hidden: true
---

If you're a frequent traveller it might be hard to keep track of different countries' travel bans as a result of the Coronavirus outbreak. We've put together this handy tool which can make it easier to visualize. Simply enter the nationality of the passport you're travelling on as well as the countries you've been to recently and how many days ago you were last there. Red countries are enforcing travel bans either for your nationality or for one of the countries you've recently been to, yellow countries are enforcing some type of restrictions (Such as quarantines or revoking visa on arrival).

# Instructions

1. Enter the nationality of the passport you're travelling on
2. Enter any countries you've visited recently and how many days ago you were there
3. If you're coming from a country, make sure you enter the number of days ago as 1 to observe rules regarding country of origin

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

For simplicity, in cases where only parts of a country is affected by the travel bans, such as Hong Kong only banning travellers who have been to certain parts of Italy, any travel to that country will result in the enforcing country being marked as banned. This means you might be able to travel to that country anyway, always check official sources before travelling.

The map currently does not take into account if you're a resident or national of the country you want to travel to, citizens of most countries are allowed to return home even if they've been in banned areas. This will be fixed in a future version.

For your privacy the tool runs fully in the browser and no data about your travel history or nationality is ever sent anywhere.

**Last updated:** <span class="last-updated"></span>

NOTE: The information is correct to the best of AwardFares' knowledge at the time of publication and is being reviewed and updated on an ongoing basis by AwardFares staff, given the rapidly evolving nature of the international response to the COVID-19 outbreak AwardFares cannot guarantee its accuracy and can accept no liability for any errors or omissions. This website is provided for informational purposes only and should not be relied upon as travel advice, you should make your own independent inquiries before relying on any information or materials contained on these pages.  

Source: [IATA](https://www.iatatravelcentre.com/international-travel-document-news/1580226297.htm)

If you find any errors, feel free to [email us](mailto:hello@awardfares.com)

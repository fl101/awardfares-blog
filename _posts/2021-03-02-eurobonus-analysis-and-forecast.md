---
layout: post
title: SAS EuroBonus Analysis and Forecast (Free Tool)
category: [Tools, EuroBonus]
tags: [SAS]
author: Philip
image: /assets/img/eurobonus-analysis-and-forecast/cover.webp
hide_image_in_post: true
---

A simple tool that helps you analyze and forecast your SAS EuroBonus activity. Simply import your point activity from your EuroBonus profile. All calculations are performed directly in your browser. Your data is kept private and is not uploaded/processed by our servers.

1. Log into SAS [My EuroBonus](https://www.sas.se/en/profile/#/profile?userAction=Eurobonus)
2. Scroll down to "Activity"
3. Click "Export to Excel"
4. Drag the downloaded Excel file to the box below
5. Enter your current EuroBonus "Points for Use" balance

<div id="dropzone">
  Drag and drop your exported activity here!
</div>

## Point History
Your point accrual and spend history during the past 5 years.
Your balance changed by <b><span id="delta">0</span></b> points during this time.
<canvas id="pointsChart" width="400" height="100"></canvas>

## Point Categories
Your point activity by category during the past 5 years.
<canvas id="categoriesChart" width="400" height="100"></canvas>

## Fly Premium

Your Fly Premium balance for the past and next 12 months.   
Your current Fly Premium balance: <b><span id="flypremiumBalance">0</span></b>  
Your highest Fly Premium balance: <b><span id="flypremiumHighest">0</span></b> (during the past 12 months).  
Your current Fly Premium status: <b><span id="flypremiumStatus"></span></b>  
Your current Fly Premium forecast: <b><span id="flypremiumForecast"></span> per month</b>. This is based on your average earnings during the past 6 months.

<canvas id="flypremiumChart" width="400" height="100"></canvas>

## Point Activity
<table id="log">
  <thead>
    <tr>
      <th>Date</th>
      <th>Extra</th>
      <th>Base</th>
      <th>Description</th>
      <th>FlyPremium</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>

<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.9/jszip.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.9/xlsx.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>
<script src="/assets/js/eurobonus.v5.js"></script>

<style>
  #dropzone {
    margin-top: 30px;
    border: 2px dashed #2e5c8a;
    border-radius: 5px;
    background: #eee;
    padding: 30px 10px;
    text-align: center;
  }
  #log {
    font-size: 9pt;
    margin-top: 10px;
    text-align: left;
  }
</style>

## More Free Tools

* [Seat Maps Checker](https://blog.awardfares.com/seatmaps/)
* [Ultimate Guide to Award Release Dates](https://blog.awardfares.com/ultimate-guide-to-award-release-dates/)
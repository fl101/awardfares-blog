---
layout: post
title: SAS EuroBonus Analysis and Forecast
tags: [Tools, EuroBonus]
author: Philip
image: /assets/img/eurobonus-analysis-and-forecast/overview.png
hide_image_in_post: true
---

We've built a simple tool that helps you analyze and forecast your SAS EuroBonus activity. Simply import your point activity from your EuroBonus profile. All calculations are performed directly in your browser. Your data is kept private and is not uploaded/processed by our servers.

1. Log into SAS [My EuroBonus](https://www.sas.se/en/profile/#/profile?userAction=Eurobonus)
2. Scroll down to "Activity"
3. Click "Export to Excel"
4. Drag the downloaded Excel file to the box below
5. Enter your current EuroBonus "Points for Use" balance

<div id="dropzone" ondrop="dropHandler(event);" ondragover="dragOverHandler(event);">
  Drag and drop your exported activity here!
</div>

## Point History
Your point accrual and spend history during the past 12 months.  
Your balance changed by <b><span id="delta">0</span></b> points during this time.
<canvas id="pointsChart" width="400" height="100"></canvas>

## Point Categories
Your point activity by category during the past 12 months.
<canvas id="categoriesChart" width="400" height="100"></canvas>

## FlyPremium Forecast
Your FlyPremium status forecast for the **next** 12 months.  
Your current FlyPremium balance: <b><span id="flypremiumBalance">0</span></b>  
Your current FlyPremium status: <b><span id="flypremiumStatus"></span></b>
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

<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/jszip.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/xlsx.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>
<script src="/assets/js/eurobonus.js"></script>

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

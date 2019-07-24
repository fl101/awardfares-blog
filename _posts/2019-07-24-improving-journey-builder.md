---
layout: post
title: Improving the Journey Builder
tags: [news]
author: Philip
comments: true
image: /assets/img/improving-journey-builder/overview.png
hidden: true
---

With the release of the new AwardFares UI we had to make some changes to how filtering flights works. We're now releasing some improvements that should make it easier to build journeys.

## Improved filtering
Clicking "Add Flight" now correctly filters flights based on the arrival or departure time of another flight. For example, it will no longer show flights that depart before arriving, and it will also show flights for more than one date.

<img src="/assets/img/improving-journey-builder/addflight.png" class="" />

## Connection times
Furthermore, a new feature we've added is that connection times are now shown directly in the flights list. This should make it much easier to choose the optimal flight for your journey. Color coding should also make this easier at a glance.

<img src="/assets/img/improving-journey-builder/deltas.png" class="" />

The connection time is color coded based on the following rules (the same rules apply in the journey list):

- Short Layover (shorter than 1 hour) → Yellow
- Long Layover (longer than 4 hours) → Yellow
- Overnight (departs after 4 AM the next day) → Yellow
- Stopover (longer than 24 hours) → Red

## Journey loading time
Another small improvement, we've improved the loading time for large journeys with many segments. Rather than taking several seconds, journeys should now load almost instantly.

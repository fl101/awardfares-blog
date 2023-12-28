---
layout: post
title: "Last-Minute EuroBonus Redemption Gems (For The Amex Companion Vouchers)"
category: [Guide]
tags: [SAS EuroBonus, Star Alliance]
author: Germán
image: /assets/img/eurobonus-last-minute-awards/cover.webp
hidden: true
sitemap: false
---

## Last-minute EuroBonus Awards At Great Value (Top Routes)

### 1. Lufthansa First Class for 87k points (Round trip)

There are several LH First seats on a bunch of routes to the North America and Asia, connecting in Frankfurt and Munich. Standard round-trip prices for these awards are anywhere from 165k to 270k points, but when using a 2-for-1 voucher you can score them for **87k-135k points per passenger**.

<img src="../assets/img/eurobonus-last-minute-awards/lh-first.webp" alt="Lufthansa First Class Awards with EuroBonus Points (Dec 2023)." class="noborder"/>

Remember that these awards need to be booked through the SAS Service Center, and keep in mind that sometimes awards don't show up because of [married segment restrictions](https://blog.awardfares.com/married-segments).

The list below gets updated in real time and shows you the available award seats for the next 30 days on **Lufthansa First** using SAS EuroBonus points.

<table id="lh-first"></table>

Some routes with great availability in the next 2 weeks are:

* [Boston BOS to Munich MUC](https://awardfares.com/search?BOS.MUC.;c:first;z:sas)
* [México City MEX to Frankfurt FRA](https://awardfares.com/search?MEX.FRA.;c:first;z:sas)
* [Chicago ORD to Frankfurt FRA](https://awardfares.com/search?ORD.FRA.;c:first;z:sas)
* [Munich MUC to Boston BOS](https://awardfares.com/search?MUC.BOS.;c:first;z:sas)
* [Munich MUC to New York JKF](https://awardfares.com/search?MUC.JFK.;c:first;z:sas)
* [New York JKF to Munic MUC](https://awardfares.com/search?JFK.MUC.;c:first;z:sas)
* [Bogotá BOG to Frankfurt FRA](https://awardfares.com/search?BOG.FRA.;c:first;z:sas)
* [Hong Kong HKG to Frankfurt FRA](https://awardfares.com/search?HKG.FRA.;c:first;z:sas)
* [San Francisco SFO to Frankfurt FRA](https://awardfares.com/search?SFO.FRA.;c:first;z:sas)
* [Shanghai PVG to Frankfurt FRA](https://awardfares.com/search?PVG.FRA.;c:first;z:sas)
  
**Read more**: If you want good redemptions beyond the 15-day window, Lufthansa Business Class can also be a solid choice (particularly on the 747-8). Check out the following guide with a complete deep-dive into booking LH awards with EB points:

* [*Essential Guide To Book Lufthansa Flights With SAS EuroBonus Points*](https://blog.awardfares.com/lufthansa-with-eurobonus-guide/)

### 2. Turkish Airlines A350 Business Class for 82k points (Round Trip)

Turkish Airlines has an extremely competitive Business Class product (especially on their new A350s), a well connected network, a great new hub at Istanbul, and more-than-decent award prices with EB points. A killer combo!

These days, we are seeing great availability to destinations in North America and the Caribbean. Although, one of our favorites is from Europe to São Paulo, Brazil: a lenghty flight you can enjoy.

<img src="../assets/img/eurobonus-last-minute-awards/ist-gru.webp" alt="Turkish Airlines A350 Business Class Awards with EuroBonus Points (Dec 2023)." class="noborder"/>

These awards are typically 99k points one way, or 165k points round trip. When using an Amex voucher, you get them at a whopping 87.5k point rate per passenger. These awards can generally be booked through the SAS EuroBonus portal (Star Alliance search), unless you want a more complex itinerary.

The table below gets updated in real time and shows you the available award seats for the next 30 days on **Turkish Airlines Business Class** (all cabins) using SAS EuroBonus points.

<table id="tk-business"></table>

* [Istanbul IST to São Paulo GRU](https://awardfares.com/search?IST.GRU.;c:business;a:TK;z:sas#)
* [Cancún CUN to Istanbul IST](https://awardfares.com/search?CUN.IST.;c:business;a:TK;z:sas#)
* [Istanbul IST to Panama PTY](https://awardfares.com/search?IST.PTY.;c:business;a:TK;z:sas#)
* [Istanbul IST to México City MEX](https://awardfares.com/search?IST.MEX.;c:business;a:TK;z:sas#)
* [Bogotá BOG to Istanbul IST](https://awardfares.com/search?BOG.IST.;c:business;a:TK;z:sas#)
* [Istanbul IST to Havana HAV](https://awardfares.com/search?IST.HAV.;c:business;a:TK;z:sas#)

**Read more**: Check out our full guide on Turkish Airlines redemptions with EuroBonus points, including a thorough comparison of all their cabins.

* [*Essential Guide To Book Lufthansa Flights With SAS EuroBonus Points*](https://blog.awardfares.com/lufthansa-with-eurobonus-guide/)

### 3. TAP A330-900neo Business Class for

### 4. 

### 5. 

## Want more award travel intel?

You can [try AwardFares for free](https://awardfares.com/). We are rolling out new features and improvements regularly, so [sign up for our monthly newsletter](https://awardfares.com/newsletter) to stay on top of the latest news, announcements, and pro tips.

With our [Gold and Diamond tiers](https://awardfares.com/pricing), you can access premium features such as unlimited daily searches, alerts, seat maps, flight schedules, and more!

## Read more

Our guides have all the information you need to be a pro travel hacker and explore the world on points. Here are some related posts you might enjoy:

- [SAS Amex 2-for-1 Vouchers Expire Soon. Here's What You Need To Know.](https://blog.awardfares.com/sas-amex-2-for-1-2023/)
- [Essential Guide To Book Lufthansa Flights With SAS EuroBonus Points](https://blog.awardfares.com/lufthansa-with-eurobonus-guide/)
- [SAS Will Leave Star Alliance! Here’s What To Do Next (2023)](https://blog.awardfares.com/sas-acquisition/)
- [Booking Turkish Airlines Flights With SAS EuroBonus Points (Guide)](https://blog.awardfares.com/turkish-with-eurobonus/)
- [How To Find Cheap Award Flights And Identify Good Redemptions (Step-by-step)](https://blog.awardfares.com/how-to-find-cheap-award-flights/)

<script>
  (function () {
    createStatsTable('first');
    createStatsTable('business');
    createStatsTable('economy');
    async function createStatsTable(cabin, limit) {
      const host = /*window.location.hostname == 'localhost' ? 'http://localhost:3000' :*/ 'https://awardfares.com';
      const endpoint = `/api/stats/lufthansa-top-routes.json?cabin=${cabin}`;
      const table = document.getElementById(`lh-${cabin}`);
      table.innerHTML = 'Loading...';
      try {
        const resp = await fetch(host + endpoint);
        const data = await resp.json();
        const moreLink = `https://awardfares.com/search?..;c:${cabin};a:LH;z:eurobonus`;
        const rowLimit = 10;
        const seatsPerIcon = data[0]?.total / rowLimit;
        const rows = data.slice(0, rowLimit).map(route => {
          const seatLimit = 10;
          const displayCount = route.total;
          const searchLink = `https://awardfares.com/search?${route.route.replace('-', '.')}.;c:${cabin};a:LH;z:eurobonus`;
          return `<tr>
            <td>
              ${route.route}
            </td>
            <td>
              <div style="width: ${Math.ceil(route.total / seatsPerIcon) * 20}px; height: 20px; background-image: url(https://awardfares.com/img/seat.png); background-size: contain; background-repeat: repeat-x"></div>
            </td>
            <td>
              <a href="${searchLink}">${displayCount} seat${route.total > 1 ? 's' : ''}</a></td>
            </tr>`;
        });
        if (rows.length > 0) {
          rows.push(`<tr><td colspan="3" align="center"><a href="${moreLink}">See all available seats</center></td></tr>`);
          table.innerHTML = rows.join('');
        } else {
          table.innerHTML = 'No seats available right now';
        }
      } catch (err) {
        console.error(err);
        table.innerHTML = 'Data not available right now';
      }
    }
  })();
</script>

<script>
  (function () {
    createStatsTable('first');
    createStatsTable('business');
    createStatsTable('economy');
    async function createStatsTable(cabin, limit) {
      const host = /*window.location.hostname == 'localhost' ? 'http://localhost:3000' :*/ 'https://awardfares.com';
      const endpoint = `/api/stats/turkish-top-routes.json?cabin=${cabin}`;
      const table = document.getElementById(`tk-${cabin}`);
      table.innerHTML = 'Loading...';
      try {
        const resp = await fetch(host + endpoint);
        const data = await resp.json();
        const moreLink = `https://awardfares.com/search?..;c:${cabin};a:TK;z:eurobonus`;
        const rowLimit = 10;
        const seatsPerIcon = data[0]?.total / rowLimit;
        const rows = data.slice(0, rowLimit).map(route => {
          const seatLimit = 10;
          const displayCount = route.total;
          const searchLink = `https://awardfares.com/search?${route.route.replace('-', '.')}.;c:${cabin};a:TK;z:eurobonus`;
          return `<tr>
            <td>
              ${route.route}
            </td>
            <td>
              <div style="width: ${Math.ceil(route.total / seatsPerIcon) * 20}px; height: 20px; background-image: url(https://awardfares.com/img/seat.png); background-size: contain; background-repeat: repeat-x"></div>
            </td>
            <td>
              <a href="${searchLink}">${displayCount} seat${route.total > 1 ? 's' : ''}</a></td>
            </tr>`;
        });
        if (rows.length > 0) {
          rows.push(`<tr><td colspan="3" align="center"><a href="${moreLink}">See all available seats</center></td></tr>`);
          table.innerHTML = rows.join('');
        } else {
          table.innerHTML = 'No seats available right now';
        }
      } catch (err) {
        console.error(err);
        table.innerHTML = 'Data not available right now';
      }
    }
  })();
</script>
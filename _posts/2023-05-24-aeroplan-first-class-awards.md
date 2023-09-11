---
layout: post
title: "How To Find First-class Award Flights Using Aeroplan Miles (With Realtime Updates)"
category: [Air Canada Aeroplan, Guide]
author: Germán
image: /assets/img/aeroplan-first-class/cover.webp
---

Aeroplan has more airline partners than any other program, and that’s good news for flyers trying to score a flight in First Class. Getting a first-class award ticket is a great way to live the full experience without spending tens of thousands of dollars on the full-fare ticket. Aeroplan, then, with so many partners onboard, comes across as one of the best ways to get a first-class award ticket in 2023.

But searching for those tickets is generally hard and tricky: only a few seats are available, and many are released last minute. In addition, even if you see space available, how do you know it is a good redemption for your miles? How can you search for **good awards** without spending hours doing so?

In this guide, we cover a step-by-step guide on how to find good first-class redemption for your Aeroplan miles using our tool AwardFares.

<h2 id="live">Available First-class Award Tickets using Aeroplan Miles - Right Now!</h2>

The lists below are updated in real time and show you the available award seats for the next 30 days on some of the major partner airlines using your Aeroplan miles.

### Aeroplan redemptions on Lufthansa First-class

<table id="aeroplan-first-lh"></table>

### Aeroplan redemptions on ANA First-class

<table id="aeroplan-first-nh"></table>

### Aeroplan redemptions on Emirates First-class

<table id="aeroplan-first-ek"></table>

## How To Find First-class Award Flights Using Aeroplan Miles

### 1. Create an AwardFares account and log-in

Go to AwardFares’ sign-up page and create an account. You’ll need to enter an email address and a password.

After completing the form, you will receive an email with a link to activate your account. Once the account is activated, you are ready to start searching!

### 2. Select Aeroplan as your Frequent Flyer Program

On AwardFares homepage, you will see a Frequent Flyer Program Picker (FFP). Tap on it and select **Aeroplan**. This will only perform searches and show you award seats available using Aeroplan miles.

<figure>
<img src="/assets/img/aeroplan-first-class/2-select-ffp.gif" alt="Show only Aeroplan results in AwardFares" />
</figure>

### 3. Filter out by First-class cabin

Now, under **Cabin**, select **First Class** **Only**. This will remove all other cabins, such as Economy, Premium Economy, and Business, and just show you seats available in First-class.

<figure>
<img src="/assets/img/aeroplan-first-class/3-select-first-class-cabin.gif" alt="Filter Aeroplan awards on First-class Cabin" />
</figure>

### 4. Select Origin and Destination

If you already have your departure and destination city, you can add those under the "**Where from?**" and “**Where to?**" fields. Once you do so, you will be able to see the Timeline view with all available awards per day.

<figure>
<img src="/assets/img/aeroplan-first-class/4-timeline-view.webp" alt="Aeroplan First-class Award Seats (Timeline View) on AwardFares" />
</figure>

### 5. Perform a broad search.

If you have flexibility on the routes, AwardFares is powerful as Google Flights. It lets you explore options available by performing what we call **broad searches**. You can see available flights by selecting only departure, arrival city, or regions. For example, you can explore all flights from [**Europe** to the **United States**](https://awardfares.com/search?zone:Europe.country:US.;c:first;z:aeroplan) by simply typing those regions.

### 6. Filter out by Airline

If you are interested in a particular airline, you can tap the **Airline** filter and select it. This allows you to see only flights on, for example, Lufthansa, Emirates, Singapore Airlines, ANA, or others.

<figure>
<img src="/assets/img/aeroplan-first-class/6-select-airline.gif" alt="Filter AwardFares results by airline." />
</figure>

### 7. Confirm availability on Aeroplan’s website

Once you have selected the options, you can double-check the availability on Aeroplan’s website with your own account, searching for the exact same flights and dates you found using AwardFares.

You can compare the mileage requirements and fees for different flights and airlines and then determine the best redemptions for your desired dates and destinations.

**Pro tip:** Keep in mind that off-peak pricing and lower fuel surcharges can save you both miles and money.

### 8. Optional: Set up alerts

If you don’t see available seats on a given flight and date you are interested, don’t worry. Seat availability changes daily, as airlines release those seats on short notice.

AwardFares has an alert feature that monitors the flights you want and notifies you via email once/if they become available.

To set up an Alert, just tap on **Alerts** > **Add Alert** > and fill out the required information such as route, dates, passengers, cabin.

<figure>
<img src="/assets/img/aeroplan-first-class/8-aeroplan-alerts.webp" alt="Set up Aeroplan First-class Alerts on AwardFares." />
</figure>

### 9. That’s it!

Pretty easy, right? AwardFares, lets you see all the available flights in first-class cabins ready to be booked using Aeroplan miles in just a few clicks. It saves you hours of searches on Aeroplan’s website by showing you broad results you can filter out in an intuitive and easy-to-use interface.

Remember that some of the features and limits are improved if you upgrade to a Gold or Diamond package.

### Why AwardFares is Your Go-To Tool for First-Class Award Searches

AwardFares is the world’s fastest search engine for award tickets. It searches across frequent flyer programs in just seconds and lets you filter results and monitor alerts easily and intuitively. The best part is that you **don’t need** to connect your Aeroplan account to it.

#### Comprehensive Search Tool

AwardFares scans availability across multiple loyalty programs, including Aeroplan, allowing you to see a more comprehensive range of options. This means you'll have access to a broader selection of first-class awards, increasing your chances of finding the perfect flight.

#### Time-Saving and Efficient

Searching for first-class awards can be time-consuming, especially if you're flexible with your travel dates or considering multiple destinations. AwardFares simplifies the process by providing an intuitive interface that lets you quickly identify award availability and compare options.

#### Customizable Alerts

Never miss out on a first-class award opportunity again! AwardFares lets you set up customizable alerts for specific routes, airlines, and travel dates. When availability opens up, you'll receive a notification, allowing you to book your dream flight before it's gone.

#### Continuous Monitoring

AwardFares continuously monitors award availability across multiple airlines, ensuring you have access to the most up-to-date information. This is particularly helpful when booking with partner airlines, as availability can change frequently.

## Also read.

Make sure to also [check this post out with the best Aeroplan award chart sweet spots](https://blog.awardfares.com/aeroplan-guide/) and how to find them.

We are rolling out new features and improvements regularly, so sign up for our newsletter to stay on top of the latest news, announcements, and pro tips.

<script>
  (function () {
    createStatsTable('lh');
    createStatsTable('nh');
    createStatsTable('ek');
    async function createStatsTable(carrier) {
      const host = window.location.hostname == 'localhost' ? 'http://localhost:3000' :'https://awardfares.com';
      const endpoint = '/api/stats/' + `aeroplan-first-${carrier}` + '.json'
      const table = document.getElementById(`aeroplan-first-${carrier}`);
      table.innerHTML = 'Loading...';
      try {
        const resp = await fetch(host + endpoint);
        const data = await resp.json();
        /*
        // Test data:
        if (carrier == 'lh') {
          data = [{"route":"EZE-FRA","total":15},{"route":"FRA-EZE","total":11},{"route":"FRA-GRU","total":7},{"route":"FRA-EWR","total":5},{"route":"FRA-MEX","total":4},{"route":"MUC-BOS","total":4},{"route":"FRA-SFO","total":3},{"route":"FRA-ORD","total":3},{"route":"FRA-IAD","total":3},{"route":"FRA-IAH","total":3},{"route":"BOS-MUC","total":2},{"route":"GRU-FRA","total":2},{"route":"FRA-HND","total":1},{"route":"FRA-JFK","total":1},{"route":"FRA-HKG","total":1},{"route":"MUC-ORD","total":1},{"route":"MUC-IAD","total":1},{"route":"HND-FRA","total":1}];
        } else {
          data = [];
        }
        */
        const moreLink = `https://awardfares.com/search?..;c:first;a:${carrier.toUpperCase()};z:aeroplan`;
        const rowLimit = 10;
        const rows = data.slice(0, rowLimit).map(route => {
          const limit = 20;
          const displayCount = route.total > limit ? `${limit}+` : route.total;
          const searchLink = `https://awardfares.com/search?${route.route.replace('-', '.')}.;c:first;a:${carrier.toUpperCase()};z:aeroplan`;
          return `<tr>
            <td>
              ${route.route}
            </td>
            <td>
              <div style="width: ${Math.min(route.total, limit) * 20}px; height: 20px; background-image: url(https://awardfares.com/img/seat.png); background-size: contain; background-repeat: repeat-x"></div>
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

<script type="application/ld+json">
{
  "@context": "https://schema.org/", 
  "@type": "HowTo", 
  "name": "How To Find First-class Award Flights Using Aeroplan Miles",
  "description": "Step-by-step tutorial on how to find first-class award tickets using Aeroplan miles, including seats on Lufthansa First Class, ANA First Class, and Emirates First Class",
  "image": "https://blog.awardfares.com/assets/img/aeroplan-first-class/cover.webp",
  "totalTime": "PT5M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "0"
  },
  "tool":[{
    "@type": "HowToTool",
    "name": "AwardFares"
  }],
  "supply":[{
    "@type": "HowToSupply",
    "name": "AwardFares"
  }],
  "step": [{
    "@type": "HowToStep",
    "name": "Create account",
    "text": "Create an AwardFares account and log-in.",
    "url": "https://awardfares.com/signup"
  },{
    "@type": "HowToStep",
    "name": "Select Aeroplan",
    "url": "https://awardfares.com/search?..;z:aeroplan",
    "text": "Select Aeroplan in the Frequent Flyer Program picker."
  },{
    "@type": "HowToStep",
    "name": "Filter First Class",
    "url": "https://awardfares.com/search?..;c:first;z:aeroplan",
    "text": "Filter out by First Class cabin."
  },{
    "@type": "HowToStep",
    "name": "Select route",
    "url": "https://awardfares.com/search?..;c:first;z:aeroplan",
    "text": "Select Origin and Destination."
  },{
    "@type": "HowToStep",
    "name": "Perform search",
    "url": "https://awardfares.com/search?..;c:first;z:aeroplan",
    "text": "Perform a broad search (optional)."
  },{
    "@type": "HowToStep",
    "name": "Filter by airline",
    "url": "https://awardfares.com/search?..;c:first;a:LH;z:aeroplan",
    "text": "Filter out by Airline."
  },{
    "@type": "HowToStep",
    "name": "Book",
    "url": "https://awardfares.com/search?..;c:first;a:LH;z:aeroplan",
    "text": "Confirm availability on Aeroplan’s website."
  },{
    "@type": "HowToStep",
    "name": "Set up alerts",
    "url": "https://awardfares.com/alerts",
    "text": "Set up award alerts (optional)."
  }]    
}
</script>

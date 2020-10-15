
    function makeLayout(data) {
      const layoutColumns = [];
      let counter = 0;
      for (const section of data.arrangement) {
        if (layoutColumns.length > 0) {
          layoutColumns.push('');
        }
        for (let i = 0; i < section; i++) {
          layoutColumns.push(data.columns[counter++]);
        }
      }
      const layoutRows = [];
      for (const row of data.rows) {
        const seats = [];
        let counter = 0;
        for (const section of data.arrangement) {
          if (seats.length > 0) {
            seats.push(['aisle']);
          }
          for (let i = 0; i < section; i++) {
            const seat = row.seats[counter++];
            seats.push([
              seat.blocked ? 'blocked' : 'not-blocked',
              seat.available ? 'available' : 'occupied',
              seat.present ? 'present' : 'not-present'
            ]);
          }
        }
        layoutRows.push({ number: row.number, seats });
      }
      return { columns: layoutColumns, rows: layoutRows };
    }

    var app = new Vue({
      el: "#app",
      data: {
        query: {
          from: '',
          to: '',
          date: moment().format('YYYY-MM-DD'),
          flight: '',
          cabin: 'economy',
        },
        loading: false,
        seatmap: null,
        layout: null,
        error: null,
      },
      created() {
        this.load();
      },
      methods: {
        load() {
          var hash = window.location.hash.slice(1);
          if (hash) {
            const params = new URLSearchParams(hash);
            this.query = Object.assign(this.query, {
              from: params.get('from'),
              to: params.get('to'),
              date: params.get('date'),
              flight: params.get('flight'),
              cabin: params.get('cabin'),
            });
            this.search();
          }
        },
        search() {
          this.loading = true;
          var qs = $.param(this.query);
          window.location.hash = qs;
          var endpoint = window.location.hostname == 'localhost' ? 'http://localhost:3000' :'https://awardfares.com';
          $.getJSON(endpoint + '/api/seatmap.json?' + qs, (body) => {
            this.loading = false;
            this.error = null;
            this.seatmap = body;
            //this.layout = makeLayout(body);
          }).fail((resp) => {
            this.loading = false;
            this.error = resp.responseJSON && resp.responseJSON.error ? resp.responseJSON.error : 'Seat map not available';
            this.seatmap = null;
          });
        }
      },
    });
(function () {
  var SEARCH_INPUT_SELECTOR = ".search-input";
  var NO_RESULTS_MESSAGE_ID = "not-found";
  var SEARCH_RESULTS_CONTAINER_ID = "search-results";
  var QUERY_VARIABLE_URL_STRING = "query";
  var SEARCH_TITLE_ID = "search-title";

  function getQueryVariable(queryParam) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      var param = pair[0];
      var value = pair[1];
      if (param === queryParam) {
        return decodeURIComponent(value.replace(/\+/g, "%20"));
      }
    }
    return '';
  }

  function getSearchTerm() {
    return getQueryVariable(QUERY_VARIABLE_URL_STRING);
  }

  function setSearchBoxValue(searchBoxValue) {
    document
      .querySelectorAll(SEARCH_INPUT_SELECTOR)
      .forEach((el) => el.setAttribute("value", searchBoxValue));
    document.getElementById(SEARCH_TITLE_ID).innerText = 'Results for: ' + searchBoxValue;
  }

  function showNoResultsMessage() {
    document.getElementById(NO_RESULTS_MESSAGE_ID).style.display = "block";
  }

  function setSearchResultsHTML(innerHTML) {
    var searchResults = document.getElementById(SEARCH_RESULTS_CONTAINER_ID);
    searchResults.innerHTML = innerHTML;
  }

  function createPostListingHTML(postItem) {
    const tags = postItem.category?.join ? postItem.category.join(', ') : postItem.category;
    return `
      <div class="search-link">
        <div>
          <a href="${postItem.url}">
            <img src="${postItem.image}" />
          </a>
        </div>
        <div>
          <div><a href="${postItem.url}">${postItem.title}</a></div>
          <div class="date">${postItem.date} ${tags ? `· ${tags}` : ''}</div>
        </div>
      </div>
    `;
  }

  function displaySearchResults(results, store) {
    if (results.length) {
      var postsListingHTML = "";
      for (var i = 0; i < results.length; i++) {
        var postItem = store[results[i].ref];
        postsListingHTML += createPostListingHTML(postItem);
      }
      setSearchResultsHTML(postsListingHTML);
    } else {
      setSearchResultsHTML('');
      showNoResultsMessage();
    }
  }

  var searchTerm = getSearchTerm();
  if (searchTerm) {
    setSearchBoxValue(searchTerm);
  } else {
    setSearchResultsHTML('')
  }

  function search(searchTerm) {

    var lunrIndex = lunr(function () {
      this.field("id");
      this.field("title", { boost: 10 });
      this.field("author");
      this.field("category");
      this.field("content");
      for (const key in window.store) {
        this.add(window.store[key]);
      }
    });

    var results = lunrIndex.search(searchTerm);
    displaySearchResults(results, window.store);
  }

  fetch("/search.json").then((resp) => {
    resp.json().then((json) => {
      window.store = json;
      if (searchTerm) {
        search(searchTerm);
      }
    });
  });
})();

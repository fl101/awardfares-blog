$('.af-dynamic-search-date').each((index, element) => {
  $(element).attr('href', $(element).attr('af-search-string').replace('{date}', moment().add(1, 'week').format('YYYY-MM-DD')))
});


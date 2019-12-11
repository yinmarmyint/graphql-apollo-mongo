import assertProps from './asserts';

export default (headers, params) => {
  if (
    headers &&
    assertProps(
      headers,
      'achromex-total-pages',
      'achromex-current-page',
      'achromex-elements-per-page',
      'achromex-total-elements'
    )
  ) {
    const totalPages = parseInt(headers['achromex-total-pages'], 10);
    const currentPage = parseInt(headers['achromex-current-page'], 10);
    const elementsPerPage = parseInt(headers['achromex-elements-per-page'], 10);
    const totalElements = parseInt(headers['achromex-total-elements'], 10);
    const sortQueries = headers['achromex-sort-queries'];
    const searchQueries = headers['achromex-search-queries'];
    return {
      totalPages,
      totalElements,
      currentPage,
      elementsPerPage,
      sortQueries,
      searchQueries,
      params,
    };
  }
  return null;
};

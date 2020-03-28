const SORT_UTIL = {
  increase: {
    sortBy: (a, b) => new Date(a.date) - new Date(b.date)
  },
  decrease: {
    sortBy: (a, b) => new Date(b.date) - new Date(a.date)
  },
  default: {
    sortBy: (a, b) => new Date(a)
  }
};

export { SORT_UTIL };

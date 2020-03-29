const MONTHS = [
  "januar",
  "februar",
  "march",
  "april",
  "mai",
  "june",
  "july",
  "august",
  "september",
  "oktober",
  "november",
  "desember"
];

const formatDate = ( date ) => {
  const DATE =  date.date || date 
  const [day, monthName, year] = DATE.replace('.', '').split(" ");
  const month = MONTHS.indexOf(monthName);
  return new Date(year, month, day);
};

const SORT_UTIL = {
  increase: {
    sortBy: (a, b) => formatDate(a.date) - formatDate(b.date)
  },
  decrease: {
    sortBy: (a, b) => formatDate(b.date) - formatDate(a.date)
  },
  default: {
    sortBy: (a) => formatDate(a)
  }
};

export { SORT_UTIL };

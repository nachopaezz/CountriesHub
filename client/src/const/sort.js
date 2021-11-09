export const ASCENDING = "ascending";
export const DESCENDING = "descending";
export const HIGHEST = "highest";
export const LOWER = "lower";

export function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
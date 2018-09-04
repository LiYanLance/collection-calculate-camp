'use strict';

function compute_median(collection) {
  let arr = collection.concat();
  arr.sort((a, b) => a - b);
  const median = arr[Math.floor(arr.length / 2)];
  return arr.length % 2 === 0 ? (median + arr[Math.floor(arr.length / 2) - 1]) / 2 : median;
}

module.exports = compute_median;



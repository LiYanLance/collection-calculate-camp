'use strict';

function compute_median(collection) {
  const arr = collection.sort((a, b) => a - b);
  const median = arr[Math.floor(arr.length / 2)];
  return arr.length % 2 === 0 ? (median + arr[Math.floor(arr.length / 2) - 1]) / 2 : median;
}

module.exports = compute_median;



'use strict';

function compute_chain_median(collection) {
  let arr = collection.split("->");
  arr = arr.map(str => parseInt(str));
  arr.sort((a, b) => a - b);
  console.log(arr)
  const median = arr[Math.floor(arr.length / 2)];
  return arr.length % 2 === 0 ? (median + arr[Math.floor(arr.length / 2 - 1)]) / 2 : median;
}

module.exports = compute_chain_median;

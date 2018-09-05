'use strict';

const swap = (arr, index_a, index_b) => {
  const temp = arr[index_a];
  arr[index_a] = arr[index_b];
  arr[index_b] = temp;
}

function rank_by_two_large_one_small(collection) {
  let arr = collection.concat();
  arr.sort((a, b) => a - b);
  for (let i = 0; i + 3 < arr.length; i += 3) {
    swap(arr, i, i + 1);
    swap(arr, i + 1, i + 2);
  }
  return arr;
}

module.exports = rank_by_two_large_one_small;

'use strict';

function find_last_even(collection) {
  const arr =  collection.filter(i => i % 2 === 0);
  return arr[arr.length - 1];
}

module.exports = find_last_even;

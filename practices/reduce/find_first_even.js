'use strict';

function find_first_even(collection) {
  return collection.filter(i => i % 2 === 0)[0];
}

module.exports = find_first_even;


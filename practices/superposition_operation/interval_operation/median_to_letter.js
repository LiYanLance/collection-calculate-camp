'use strict';

const map_number_to_letter = require('../../../practices/tools');

function median_to_letter(collection) {
  let median = collection[collection.length / 2];
  median = collection.length % 2 === 0 ? parseInt((median + collection[collection.length / 2 + 1]) / 2) : median;
  return map_number_to_letter(median);
}

module.exports = median_to_letter;

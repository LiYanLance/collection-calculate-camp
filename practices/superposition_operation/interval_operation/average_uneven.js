'use strict';

const getAverage = arr => arr.reduce((a, b) => a + b) / arr.length;

function average_uneven(collection) {
  return getAverage(collection.filter(i => i % 2 !== 0));
}

module.exports = average_uneven;

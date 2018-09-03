'use strict';

const getAverage = arr => arr.reduce((a, b) => a + b) / arr.length;

var calculate_median = function(collection){
  return getAverage(collection.filter(i => i % 2 === 0));
};
module.exports = calculate_median;

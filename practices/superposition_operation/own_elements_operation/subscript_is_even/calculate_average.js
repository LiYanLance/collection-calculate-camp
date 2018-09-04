'use strict';
var calculate_average = function(collection){
  return collection.filter((val, index) => index % 2 !== 0 )
    .reduce((a, b) => a + b) / (collection.length / 2);
};
module.exports = calculate_average;

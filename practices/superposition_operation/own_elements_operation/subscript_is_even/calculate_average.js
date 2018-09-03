'use strict';
var calculate_average = function(collection){
  let even_index_array = [];
  collection.forEach((val, index) => {
    if (index % 2 !== 0) {
      even_index_array.push(collection[index]);
    }
  });
  return even_index_array.reduce((a, b) => a + b) / even_index_array.length;
};
module.exports = calculate_average;

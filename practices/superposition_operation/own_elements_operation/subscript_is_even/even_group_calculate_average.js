'use strict';

const getAverage = arr => {
  if(arr.length === 0) return 0;
  return arr.reduce((a, b) => a + b, 0) / arr.length
};

var even_group_calculate_average = function(collection){
  let evens = [];
  collection.forEach((val, index) => {
    if(index % 2 !== 0){
      evens.push(val);
    }
  })
  evens = evens.filter(i => i % 2 == 0);
  if(evens.length === 0){
    return [0];
  }
  evens.sort((a, b) => a - b);
  let max_length = ("" + evens[evens.length - 1]).length, result = [];
  for(let len = 1; len <= max_length; len++){
    let average = 0;
    average = getAverage(evens.filter(even => ("" + even).length === len));
    if(average !== 0){
      result.push(average);
    }
  }
  return result;
};

module.exports = even_group_calculate_average;

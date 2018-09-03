'use strict';

const isDivisibleByAnyElements = (a, arr) => {
  return arr.filter(num => a % num === 0).length > 0;
};


function choose_divisible_integer(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.filter(num => isDivisibleByAnyElements(num, collection_b));
}

module.exports = choose_divisible_integer;

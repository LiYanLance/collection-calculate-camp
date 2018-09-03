'use strict';

function double_to_one(collection) {
  let result = [];
  collection.forEach(arr => result = result.concat(arr));
  return result;
}

module.exports = double_to_one;

'use strict';
var single_element = function (collection) {
  let arr = [];
  collection.forEach((val, index) => {
    if (index % 2 !== 0) {
      arr.push(val);
    }
  });
  return Array.from(new Set(arr)).filter(i => arr.indexOf(i) == arr.lastIndexOf(i));
};
module.exports = single_element;

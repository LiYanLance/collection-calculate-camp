'use strict';
var single_element = function (collection) {
  return collection.filter((val, index) => index % 2 !== 0)
    .filter((val, index, self) => self.indexOf(val) == self.lastIndexOf(val));
};
module.exports = single_element;

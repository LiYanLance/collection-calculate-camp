'use strict';

function double_to_one(collection) {
  return [].concat(...collection)
    .filter((val, index, self) => self.indexOf(val) == index);
}

module.exports = double_to_one;

'use strict';

function collect_min_number(collection) {
  return collection.reduce((min, num) => min < num ? min : num);
}

module.exports = collect_min_number;


'use strict';

function collect_max_number(collection) {
  return collection.reduce((max, num) => max > num ? max : num);
}

module.exports = collect_max_number;

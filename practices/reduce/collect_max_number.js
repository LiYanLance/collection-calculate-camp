'use strict';

function collect_max_number(collection) {
  return collection.reduce((a, b) => a > b ? a : b);
}

module.exports = collect_max_number;

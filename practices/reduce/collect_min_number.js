'use strict';

function collect_min_number(collection) {
  return collection.reduce((a, b) => a < b ? a : b);
}

module.exports = collect_min_number;


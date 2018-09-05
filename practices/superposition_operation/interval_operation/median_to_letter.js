'use strict';

const tool = require('../../helper');

function median_to_letter(collection) {
  return tool.map_number_to_letter(tool.get_median(collection, Math.ceil));
}

module.exports = median_to_letter;

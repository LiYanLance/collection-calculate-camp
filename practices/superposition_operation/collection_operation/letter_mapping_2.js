'use strict';

const tool = require("../../../practices/tools")

function average_to_letter(collection) {
  return tool.map_number_to_letter(Math.ceil(collection.reduce((a, b) => a + b) / collection.length));
}

module.exports = average_to_letter;


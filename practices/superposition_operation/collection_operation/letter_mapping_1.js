'use strict';

const tool = require("../../../practices/tools")

function even_to_letter(collection) {
  return collection
    .filter(i => i % 2 === 0)
    .map(i => tool.map_number_to_letter(i));
}

module.exports = even_to_letter;

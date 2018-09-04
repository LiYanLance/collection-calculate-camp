'use strict';

const tool = require('../../practices/tools');

var number_map_to_word = function(collection){
  return collection.map(i => tool.map_number_to_letter(i));
};

module.exports = number_map_to_word;

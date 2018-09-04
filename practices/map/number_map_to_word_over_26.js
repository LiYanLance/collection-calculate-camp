'use strict';

const map_number_to_letter = require('../../practices/tools');

var number_map_to_word_over_26 = function(collection){
  return collection.map(i => map_number_to_letter(i));
};

module.exports = number_map_to_word_over_26;

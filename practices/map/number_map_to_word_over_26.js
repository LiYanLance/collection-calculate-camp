'use strict';

const map_number_to_letter = number => {
  const times = number > 26 ? String.fromCharCode((number - 1) / 26 + 96) : "";
  return times + String.fromCharCode((number - 1) % 26 + 97);
};

var number_map_to_word_over_26 = function(collection){
  return collection.map(i => map_number_to_letter(i));
};

module.exports = number_map_to_word_over_26;

'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map(i => {
    let resultNum = (i > 26 ? String.fromCharCode(i / 26 + 96) : "");
    return resultNum + String.fromCharCode(i % 26 + 96);
  });
};

module.exports = number_map_to_word_over_26;

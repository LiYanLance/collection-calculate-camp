'use strict';

function choose_common_elements(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.filter(i => collection_b.includes(i));
}

module.exports = choose_common_elements;

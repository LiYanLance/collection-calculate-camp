'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  //在这里写入代码
  // a [1,2,3,4,5]  b[2,3,4,5,6]  => [1,6]
  let collection_c = collection_a.filter(a => !collection_b.includes(a));
  return collection_c.concat(collection_b.filter(b => !collection_a.includes(b)));
}

module.exports = choose_no_common_elements;

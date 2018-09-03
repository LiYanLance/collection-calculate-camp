'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  //在这里写入代码
  // a [1,2,3,4,5]  b[2,3,4,5,6]  => [1,6]
  return Array.from(new Set(collection_a)).concat(Array.from(new Set(collection_b)))
    .filter((num,_,arry) => arry.indexOf(num) === arry.lastIndexOf(num));
}

module.exports = choose_no_common_elements;

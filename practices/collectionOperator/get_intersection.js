'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  return collection_b.filter(i => collection_a.includes(i));
}

module.exports = get_intersection;

'use strict';

function compare_collections(collection_a, collection_b) {
  return collection_a.filter((item, index, self) => self[index] !== collection_b[index]).length === 0;
}

module.exports = compare_collections;



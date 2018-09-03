'use strict';

function hybrid_operation_to_uneven(collection) {
  return collection.filter(i => i % 2 !== 0)
    .map(odd => odd * 3 + 5)
    .reduce((a, b) => a + b);
}

module.exports = hybrid_operation_to_uneven;


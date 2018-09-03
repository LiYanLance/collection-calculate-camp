'use strict';

function hybrid_operation_to_uneven(collection) {
  return collection.filter(i => i % 2 !== 0)
    .map(odd => odd * 3 + 2);
}

module.exports = hybrid_operation_to_uneven;


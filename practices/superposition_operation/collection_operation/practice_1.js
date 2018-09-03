'use strict';

function hybrid_operation(collection) {
  return collection.map(i => i * 3 + 2).reduce((a, b) => a + b);
}

module.exports = hybrid_operation;


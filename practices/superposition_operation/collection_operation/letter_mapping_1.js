'use strict';

function even_to_letter(collection) {
  return collection
    .filter(i => i % 2 === 0)
    .map(i => String.fromCharCode(i + 96));
}

module.exports = even_to_letter;

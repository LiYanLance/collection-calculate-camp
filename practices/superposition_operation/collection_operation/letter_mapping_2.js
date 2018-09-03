'use strict';

function average_to_letter(collection) {
  return String.fromCharCode(Math.round(collection.reduce((a, b) => a + b) / collection.length) + 96);
}

module.exports = average_to_letter;


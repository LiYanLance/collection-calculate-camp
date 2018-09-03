'use strict';

function grouping_count(collection) {
  return collection.reduce((letters, letter) => {
    if (letter in letters) {
      letters[letter]++;
    }
    else {
      letters[letter] = 1;
    }
    return letters;
  }, {});
}

module.exports = grouping_count;

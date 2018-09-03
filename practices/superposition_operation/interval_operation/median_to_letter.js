'use strict';

const get_word_by_letter = (number) => String.fromCharCode(number + 96);

function median_to_letter(collection) {
  let median = collection[collection.length / 2];
  median = collection.length % 2 === 0 ? parseInt((median + collection[collection.length / 2 + 1]) / 2) : median;
  const front = median > 26 ? get_word_by_letter(median / 26) : "";
  return front + get_word_by_letter(median % 26);
}

module.exports = median_to_letter;

'use strict';

const map_number_to_letter = number => {
  const times = number > 26 ? String.fromCharCode((number - 1) / 26 + 96) : "";
  return times + String.fromCharCode((number - 1) % 26 + 97);
};

function get_letter_interval_2(number_a, number_b) {
  let result = [...Array(Math.abs(number_a - number_b) + 1).keys()]
    .map(x => map_number_to_letter(x + Math.min(number_b, number_a)));
  return number_a < number_b ? result : result.reverse();
}

module.exports = get_letter_interval_2;


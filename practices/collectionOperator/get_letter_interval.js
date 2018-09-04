'use strict';

const tool = require('../../practices/tools');

function get_letter_interval(number_a, number_b) {
  let result = [...Array(Math.abs(number_a - number_b) + 1).keys()]
    .map(x => tool.map_number_to_letter(x + Math.min(number_b, number_a)));
  return number_a < number_b ? result : result.reverse();
}

module.exports = get_letter_interval;

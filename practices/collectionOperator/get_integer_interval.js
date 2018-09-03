'use strict';

function get_integer_interval(number_a, number_b) {
  let result= [...Array(Math.abs(number_a - number_b) + 1).keys()].map(x => x + Math.min(number_b, number_a));
  return number_a < number_b ? result : result.reverse();
}

module.exports = get_integer_interval;


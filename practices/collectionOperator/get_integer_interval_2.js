'use strict';

const get_even = arr => arr.filter(num => num % 2 === 0);

function get_integer_interval_2(number_a, number_b) {
  let result= [...Array(Math.abs(number_a - number_b) + 1).keys()].map(x => x + Math.min(number_b, number_a));
  return get_even(number_a < number_b ? result : result.reverse());
}

module.exports = get_integer_interval_2;

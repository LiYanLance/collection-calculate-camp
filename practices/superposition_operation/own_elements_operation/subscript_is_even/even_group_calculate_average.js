'use strict';

const getAverage = arr => {
  if (arr.length === 0) return 0;
  return arr.reduce((a, b) => a + b, 0) / arr.length
};

var even_group_calculate_average = function (collection) {

  let evens = collection.filter((val, index) => val % 2 === 0 && index % 2 !== 0);
  if (evens.length === 0) {
    return [0];
  }
  let counts = evens.reduce((acc, cur) => {
    const cur_len = cur.toString().length;
    if (cur_len in acc) {
      acc[cur_len] += cur;
      acc[cur_len + "count"]++;
    } else {
      acc[cur_len] = cur;
      acc[cur_len + "count"] = 1;
    }
    return acc;
  }, {});
  return Object.keys(counts).map(i => counts[i] / counts[i + "count"])
    .filter((val, index, self) => index < self.length / 2);
};

module.exports = even_group_calculate_average;

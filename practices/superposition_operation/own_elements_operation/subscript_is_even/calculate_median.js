'use strict';

const tool = require("../../../helper")

var calculate_median = function(collection){
  return tool.get_median(collection.filter((val, index) => index % 2 !== 0));
};
module.exports = calculate_median;

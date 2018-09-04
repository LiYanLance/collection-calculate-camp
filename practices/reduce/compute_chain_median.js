'use strict';

const helper = require("../../practices/tools")

function compute_chain_median(collection) {
  return helper.get_median(collection.split("->").map(str => parseInt(str)));
}

module.exports = compute_chain_median;

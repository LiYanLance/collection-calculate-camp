const tool = require('../../helper');

function count_same_elements(collection) {
  return Array.from(tool.get_count_map(collection))
    .map(item => { return {'key': item[0], 'count': item[1]} });
}

module.exports = count_same_elements;

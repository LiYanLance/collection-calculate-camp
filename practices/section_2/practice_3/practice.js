
const tool = require('../../../practices/tools');

function count_same_elements(collection) {
  return Array.from(tool.get_count_map(collection))
    .map(item => { return {'name': item[0], 'summary': item[1]} });
}

module.exports = count_same_elements;

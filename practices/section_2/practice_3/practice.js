
const tool = require('../../../practices/tools');

function count_same_elements(collection) {
  let countMap = new Map();
  collection.forEach(num => {
    let sub_count = 1;
    if(tool.has_symbol(num)){
      const result = tool.get_real_value(num);
      num = result.num;
      sub_count = result.count;
    }
    const default_count = (countMap.has(num)) ? countMap.get(num) : 0;
    countMap.set(num, default_count + sub_count);
  })
  return Array.from(countMap).map(item => { return {'name': item[0], 'summary': item[1]} });
}

module.exports = count_same_elements;

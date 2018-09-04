function count_same_elements(collection) {
  let countMap = new Map();
  collection.forEach(num => {
    const default_count = (countMap.has(num)) ? countMap.get(num) : 0;
    countMap.set(num, default_count + 1);
  })
  return Array.from(countMap).map(item => { return {'key': item[0], 'count': item[1]} });
}

module.exports = count_same_elements;

function count_same_elements(collection) {
  let result = [];
  let countMap = new Map();
  collection.forEach(num => {
    const default_count = (countMap.has(num)) ? countMap.get(num) : 0;
    countMap.set(num, default_count + 1);
  })
  countMap.forEach((val, key) => {result.push({'key': key, 'count': val})});
  return result;
}

module.exports = count_same_elements;

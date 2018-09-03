function create_updated_collection(collection_a, object_b) {
  let countMap = new Map();
  collection_a.forEach(num => {
    const default_count = (countMap.has(num)) ? countMap.get(num) : 0;
    countMap.set(num, default_count + 1);
  })
  let result = [];
  countMap.forEach((val, key) => {
    result.push({
      'key': key,
      "count" :object_b.value.includes(key) ? val - parseInt(val / 3) : val
    })
  });
  return result;
}

module.exports = create_updated_collection;

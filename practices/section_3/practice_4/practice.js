function create_updated_collection(collection_a, object_b) {
  let countMap = new Map();
  collection_a.forEach(num => {
    let sub_count = 1;
    if(num.includes('-')){
      sub_count = parseInt(num.substring(num.indexOf('-') + 1));
      num = num.substring(0, num.indexOf('-'));
    }
    const default_count = (countMap.has(num)) ? countMap.get(num) : 0;
    countMap.set(num, default_count + sub_count);
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

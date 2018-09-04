function count_same_elements(collection) {
  let countMap = new Map();
  collection.forEach(num => {
    let sub_count = 1;
    if(num.includes('-')){
      sub_count = parseInt(num.substring(num.indexOf('-') + 1));
      num = num.substring(0, num.indexOf('-'));
    }
    const default_count = (countMap.has(num)) ? countMap.get(num) : 0;
    countMap.set(num, default_count + sub_count);
  })
  return Array.from(countMap).map(item => { return {'key': item[0], 'count': item[1]} });
}

module.exports = count_same_elements;

function collect_same_elements(collection_a, collection_b) {
  let collection = [];
  collection_b.forEach(arr => collection = collection.concat(arr));
  return collection_a.filter(num => collection.includes(num));
}

module.exports = collect_same_elements;

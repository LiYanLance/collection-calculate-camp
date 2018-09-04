function collect_same_elements(collection_a, object_b) {
  let collection = [];
  collection_a.forEach(item => collection.push(item.key))
  return collection.filter(num => object_b.value.includes(num));
}

module.exports = collect_same_elements;

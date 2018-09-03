function collect_same_elements(collection_a, object_b) {
  let collection = [];
  collection_a.map(a => collection.push(a.key));
  return collection.filter(num => object_b.value.includes(num));
}

module.exports = collect_same_elements;

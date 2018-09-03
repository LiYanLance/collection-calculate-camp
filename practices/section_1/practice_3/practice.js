function collect_same_elements(collection_a, object_b) {
  return collection_a.filter(num => object_b.value.includes(num));
}

module.exports = collect_same_elements;

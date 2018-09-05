function collect_same_elements(collection_a, object_b) {
  return collection_a.map(item => item.key)
    .filter(num => object_b.value.includes(num));
}

module.exports = collect_same_elements;

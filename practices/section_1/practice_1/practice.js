function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter(num => collection_b.includes(num));
}

module.exports = collect_same_elements;

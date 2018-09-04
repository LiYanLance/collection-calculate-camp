function collect_same_elements(collection_a, collection_b) {
  let collection = [].concat(...collection_b);
  return collection_a.filter(num => collection.includes(num));
}

module.exports = collect_same_elements;

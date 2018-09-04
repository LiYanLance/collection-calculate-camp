function create_updated_collection(collection_a, object_b) {
  return collection_a.map(val => {
    return {
      'key': val.key,
      "count" :object_b.value.includes(val.key) ? val.count - 1 : val.count
    }
  });
}

module.exports = create_updated_collection;

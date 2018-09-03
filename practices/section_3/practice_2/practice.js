function create_updated_collection(collection_a, object_b) {
  let collection = collection_a.concat();
  return collection_a.map(val => {
    return {
      'key': val.key,
      "count" :object_b.value.includes(val.key) ? val.count - parseInt(val.count / 3) : val.count
    }
  });
}

module.exports = create_updated_collection;

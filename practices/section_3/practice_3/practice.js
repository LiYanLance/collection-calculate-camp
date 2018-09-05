const tool = require("../../helper")

function create_updated_collection(collection_a, object_b) {
  return Array.from(tool.get_count_map(collection_a)).map(item => {
    return {
      'key': item[0],
      "count" :object_b.value.includes(item[0]) ? item[1] - parseInt(item[1] / 3) : item[1]
    }
  });
}

module.exports = create_updated_collection;

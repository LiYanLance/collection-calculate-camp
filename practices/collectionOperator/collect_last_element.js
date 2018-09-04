'use strict';

function collect_last_element(collection) {
  //在这里写入代码
  if(collection) {
    return collection[collection.length - 1];
  }
  return null;
}

module.exports = collect_last_element;

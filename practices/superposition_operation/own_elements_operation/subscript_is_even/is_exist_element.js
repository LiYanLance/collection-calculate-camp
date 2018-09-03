'use strict';
var is_exist_element = function(collection,element){
  for(let index = 0; index < collection.length; index++){
    if(collection[index] === element && index % 2 === 0){
      return true;
    }
  }
  return false;
};
module.exports = is_exist_element;

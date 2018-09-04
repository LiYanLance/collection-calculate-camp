'use strict';
function one_add_next_multiply_three(collection){
  let arr = collection.map((val, index, self) => (val + self[index + 1]) * 3 );
  arr.pop();
  return arr;
}

module.exports = one_add_next_multiply_three;

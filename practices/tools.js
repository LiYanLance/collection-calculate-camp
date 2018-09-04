var tool = module.exports = {};


tool.map_number_to_letter = number => {
  const times = number > 26 ? String.fromCharCode((number - 1) / 26 + 96) : "";
  return times + String.fromCharCode((number - 1) % 26 + 97);
};


const symbols = ["-", ":", "["];

const has_symbol = (str) => {
  return symbols.filter(symbol => str.includes(symbol)).length > 0;
}

const get_real_value = (str) => {
  let result = {};
  const start_symbol = symbols.filter(ss => str.includes(ss))[0];
  const end_symbol = start_symbol === '[' ? "]" : null;
  result.count = parseInt(str.substring(str.indexOf(start_symbol) + 1, end_symbol ? str.indexOf(end_symbol) : str.length));
  result.num = str.substring(0, str.indexOf(start_symbol));
  return result;
}

tool.get_median = array => {
  let arr = array.concat();
  arr.sort((a, b) => a - b);
  const median = arr[Math.floor(arr.length / 2)];
  return arr.length % 2 === 0 ? (median + arr[Math.floor(arr.length / 2) - 1]) / 2 : median;
}

tool.get_count_map = collection => {
  let countMap = new Map();
  collection.forEach(num => {
    let sub_count = 1;
    if(has_symbol(num)){
      const result = get_real_value(num);
      num = result.num;
      sub_count = result.count;
    }
    const default_count = (countMap.has(num)) ? countMap.get(num) : 0;
    countMap.set(num, default_count + sub_count);
  })
  return countMap;
}








var tool = module.exports = {};


tool.map_number_to_letter = number => {
  const times = number > 26 ? String.fromCharCode((number - 1) / 26 + 96) : "";
  return times + String.fromCharCode((number - 1) % 26 + 97);
};


const symbols = ["-", ":", "["];

tool.has_symbol = (str) => {
  return symbols.filter(symbol => str.includes(symbol)).length > 0;
}

tool.get_real_value = (str) => {
  let result = {};
  const start_symbol = symbols.filter(ss => str.includes(ss))[0];
  const end_symbol = start_symbol === '[' ? "]" : null;
  result.count = parseInt(str.substring(str.indexOf(start_symbol) + 1, end_symbol ? str.indexOf(end_symbol) : str.length));
  result.num = str.substring(0, str.indexOf(start_symbol));
  return result;
}










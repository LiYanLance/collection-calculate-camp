const map_number_to_letter = number => {
  const times = number > 26 ? String.fromCharCode((number - 1) / 26 + 96) : "";
  return times + String.fromCharCode((number - 1) % 26 + 97);
};


module.exports = map_number_to_letter;






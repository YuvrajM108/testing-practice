function capitalize(string) {
  let firstChar = string.substring(0, 1);
  if(firstChar == firstChar.toUpperCase()) {
    return string;
  } else {
    firstChar = firstChar.toUpperCase();
    let capString = firstChar.concat(string.slice(1));
    return capString;
  }
}

module.exports = capitalize;
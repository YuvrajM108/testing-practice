function reverseString(string) {
  let rString = '';
  for(let i = string.length; i >= 0; i -= 1) {
    rString += string.charAt(i);
  }
  return rString;
}

module.exports = reverseString;
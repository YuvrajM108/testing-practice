function stringLength(string) {
  if (string.length < 1) {
    return 'Error: The string cannot be empty!';
  } else if (string.length > 10) {
    return 'Error: The string is too long!';
  } else {
    return string.length;
  }
}

module.exports = stringLength;
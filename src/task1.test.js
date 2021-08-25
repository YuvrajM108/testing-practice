const stringLength = require('./task1');

test('returns number of characters in string', () => {
  expect(stringLength('test')).toBe(4);
});

test('returns an error when string is empty', () => {
  expect(stringLength('')).toBe('Error: The string cannot be empty!');
});

test('returns an error when string is longer than 10 characters', () => {
  expect(stringLength('veryLongString')).toBe('Error: The string is too long!');
});

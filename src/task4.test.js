const capitalize = require('./task4');

test('returns string with first character capitalized', () => {
  expect(capitalize('testString')).toBe('TestString');
});
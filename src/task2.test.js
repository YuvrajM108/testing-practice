const reverseLength = require('./task2');

test('returns the same string with characters reversed', () => {
  expect(reverseLength('testString')).toBe('gnirtStset');
});
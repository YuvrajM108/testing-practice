const Calculator = require('./task3');

describe('add', () => {
  test('returns the sum of two integers', () => {
    expect(Calculator.add(2, 3)).toBe(5);
  });

  test('returns the sum of two integers', () => {
    expect(Calculator.add(4, 7)).toBe(11);
  });

  test('returns the sum of two integers', () => {
    expect(Calculator.add(12, 8)).toBe(20);
  });
});

describe('subtract', () => {
  test('returns the difference between two integers', () => {
    expect(Calculator.subtract(5, 2)).toBe(3);
  });

  test('returns the difference between two integers', () => {
    expect(Calculator.subtract(12, 5)).toBe(7);
  });

  test('returns the difference between two integers', () => {
    expect(Calculator.subtract(25, 12)).toBe(13);
  });
});

describe('quotient', () => {
  test('returns the quotient of two integers', () => {
    expect(Calculator.divide(8, 2)).toBe(4);
  });

  test('returns the quotient of two integers', () => {
    expect(Calculator.divide(15, 3)).toBe(5);
  });

  test('returns the quotient of two integers', () => {
    expect(Calculator.divide(24, 8)).toBe(3);
  });
});

describe('multiply', () => {
  test('returns the product of two integers', () => {
    expect(Calculator.multiply(3, 3)).toBe(9);
  });

  test('returns the product of two integers', () => {
    expect(Calculator.multiply(2, 5)).toBe(10);
  });

  test('returns the product of two integers', () => {
    expect(Calculator.multiply(8, 7)).toBe(56);
  });
});
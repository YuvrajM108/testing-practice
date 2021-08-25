class Calculator {
  static add(x, y) {
    let sum = x + y;
    return sum;
  }

  static subtract(x, y) {
    let difference = x - y;
    return difference;
  }

  static divide(x, y) {
    let quotient = x/y;
    return quotient;
  }

  static multiply(x, y) {
    let product = x*y;
    return product;
  }
}

module.exports = Calculator;
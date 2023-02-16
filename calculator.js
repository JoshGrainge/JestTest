function Calculator() {
  return {
    add,
    subtract,
    divide,
    multiply,
  };

  function add(a, b) {
    try {
      _checkValidNumber(a);
      _checkValidNumber(b);

      return a + b;
    } catch (err) {
      throw err;
    }
  }

  function subtract(a, b) {
    try {
      _checkValidNumber(a);
      _checkValidNumber(b);

      return a - b;
    } catch (err) {
      throw err;
    }
  }

  function divide(a, b) {
    try {
      _checkValidNumber(a);
      _checkValidNumber(b);

      return a / b;
    } catch (err) {
      throw err;
    }
  }

  function multiply(a, b) {
    try {
      _checkValidNumber(a);
      _checkValidNumber(b);

      return a * b;
    } catch (err) {
      throw err;
    }
  }

  function _checkValidNumber(num) {
    if (num === undefined) throw Error("One or more arguments is undefined");
    if (typeof num !== "number")
      throw Error("A non number was passed as argument");
  }
}

module.exports = Calculator;

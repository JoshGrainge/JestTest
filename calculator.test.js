const Calculator = require("./calculator");

let calc = Calculator();

test("Addition", () => {
  expect(calc.add(5, 5)).toBe(10);
});

test("Subtraction", () => {
  expect(calc.subtract(12, 6)).toBe(6);
});

test("Division", () => {
  expect(calc.divide(100, 5)).toBe(20);
});

test("Multiplication", () => {
  expect(calc.multiply(5, 5)).toBe(25);
});

test("Wrong type", () => {
  expect(() => calc.add(5, "a")).toThrow("A non number was passed as argument");
  expect(() => calc.subtract("a", 5)).toThrow(
    "A non number was passed as argument"
  );
  expect(() => calc.divide("5", 5)).toThrow(
    "A non number was passed as argument"
  );
  expect(() => calc.multiply("a", 5)).toThrow(
    "A non number was passed as argument"
  );
});

test("Empty argument", () => {
  expect(() => calc.add(5, undefined)).toThrow(
    "One or more arguments is undefined"
  );
  expect(() => calc.subtract(5, undefined)).toThrow(
    "One or more arguments is undefined"
  );
  expect(() => calc.divide(undefined, 5)).toThrow(
    "One or more arguments is undefined"
  );
  expect(() => calc.multiply(undefined, 5)).toThrow(
    "One or more arguments is undefined"
  );
});

const reverseString = require("./reverseString");

test("Happy path", () => {
  expect(reverseString("Hello")).toMatch("olleH");
});

test("Single character string", () => {
  expect(reverseString("H")).toMatch("H");
});

test("Empty string passed", () => {
  expect(reverseString("")).toMatch("");
});

test("Not passed any parameter", () => {
  expect(() => reverseString()).toThrow("No parameter passed");
});

test("Wrong type", () => {
  expect(() => reverseString(2)).toThrow(
    "Cannot reverse a non string variable"
  );
});

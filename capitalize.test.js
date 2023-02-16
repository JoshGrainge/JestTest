const capitalize = require("./capitalize");

test("Capitalize first letter", () => {
  expect(capitalize("hello")).toMatch("Hello");
});

test("Empty string", () => {
  expect(capitalize("")).toMatch("");
});

test("No parameter", () => {
  expect(() => capitalize()).toThrow("No parameter to capitalize");
});

test("First letter already capitalized", () => {
  expect(capitalize("Test")).toMatch("Test");
});

test("Non letter first character", () => {
  expect(capitalize("1word")).toMatch("1word");
});

test("Type mismatch", () => {
  expect(() => capitalize(2)).toThrow("Parameter must be a string");
});

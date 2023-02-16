const cesarCipher = require("./cesarCipher");

test("Cipher works", () => {
  expect(cesarCipher("this is a test", 5)).toMatch("ymnx nx f yjxy");
});

test("Capitalization", () => {
  expect(cesarCipher("This is a TEST", 5)).toMatch("Ymnx nx f YJXY");
});

test("Punctuation", () => {
  expect(cesarCipher("This: sentence contains, punctuation!", 5)).toMatch(
    "Ymnx: xjsyjshj htsyfnsx, uzshyzfynts!"
  );
});

test("Z overflow test", () => {
  expect(cesarCipher("Z", 5)).toMatch("E");
  expect(cesarCipher("z", 5)).toMatch("e");
});

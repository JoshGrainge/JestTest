function cesarCipher(source, shift) {
  let cipher = "";
  for (let i = 0; i < source.length; i++) {
    let currentChar = source.charAt(i);

    // When not a letter just add the non letter character
    if (currentChar.match(/[^A-Z]/gi)) {
      cipher += currentChar;
      continue;
    }

    let charCode = source[i].charCodeAt();
    let offset = charCode < 97 ? 65 : 97;

    let char = String.fromCharCode(((charCode - offset + shift) % 26) + offset);

    cipher += char;
  }

  return cipher;
}

module.exports = cesarCipher;

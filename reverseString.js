function reverseString(source) {
  if (source === undefined) throw Error("No parameter passed");
  if (typeof source !== "string")
    throw Error("Cannot reverse a non string variable");

  let reverse = "";

  let n = source.length;
  while (n) {
    reverse += source.charAt(n - 1);
    n--;
  }

  return reverse;
}

module.exports = reverseString;

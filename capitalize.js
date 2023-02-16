function capitalize(source) {
  if (source === "") return source;
  if (!source) throw Error("No parameter to capitalize");
  if (typeof source !== "string") throw Error("Parameter must be a string");

  return source.charAt(0).toUpperCase() + source.slice(1);
}

module.exports = capitalize;

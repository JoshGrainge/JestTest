function analyzeArray(arr) {
  let length = arr.length;
  let average = 0;
  let min = 0;
  let max = 0;

  if (length > 0) {
    min = arr[0];
    max = arr[0];
  }

  let total = 0;
  for (const num of arr) {
    if (num < min) min = num;
    if (num > max) max = num;

    total += num;
  }

  average = total / length;

  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
}

module.exports = analyzeArray;

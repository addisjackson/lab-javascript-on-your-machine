/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */

function calculator() {
  const operation = process.argv[2];

  if (!operation) {
    return "No operation provided...";
  }

  const numbers = [];
  for (let i = 3; i < process.argv.length; i++) {
    const number = Number(process.argv[i]);
    if (!isNaN(number)) {
      numbers.push(number);
    } else {
      return "No numbers provioded...";
    }
  }

  if (numbers.length === 0) {
    return "No numbers provided...";
  }

  if (operation !== 'plus' && operation !== 'minus') {
    return `Invalid operation: ${operation}`;
  }

  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (operation === 'plus') {
      result += numbers[i];
    } else if (operation === 'minus') {
      result -= numbers[i];
    }
  }

  return result;
}

  
// Don't change anything below this line.
module.exports = calculator;

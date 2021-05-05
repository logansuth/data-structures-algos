/*

takes:  non-empty string
returns: run-length encoding

ex:  AAA = 3A

ex:  AAAAAAAAAAAA = 9A3A

const string = 'AAAAAAAAAAAAABBCCCCDD'
output = '9A4A2B4C2D'

loop over string, set count, while character is the same character,
increase count

when character changes,
print count with previous character

*/
const string = 'AAAAAAAAAAAAABBCCCCDD';

function printCount(string, count, char) {
  string += count + char;

  return string;
}

function runLengthEncode(string) {
  let runLengthString = '';
  let count = 1;

  for (let i = 0; i < string.length; i++) {
    const currChar = string[i];
    const nextChar = string[i + 1];

    if (count === 9) {
      runLengthString = printCount(runLengthString, count, currChar);
      count = 1;
      continue;
    }

    if (currChar === nextChar) {
      count++;
    } else {
      runLengthString = printCount(runLengthString, count, currChar);
      count = 1;
    }
  }

  return runLengthString;
}

console.log(runLengthEncode(string));

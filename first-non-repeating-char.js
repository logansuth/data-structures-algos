/*
args = string (lowercase english alphabet chars)

returns = index of the string's first non-repeating char

first non repeat is first char in string that occurs only once

if does not have non-repeating characters return -1

const string = 'abcdcaf' //1

Create alpha object
Iterate through the string
If char not in obj, then create the key and set val to 1
If in obj, increment

Iterate through string again
look up char in object
return first char that has val of 1

otherwise return -1
*/
const string = 'abcdcbaf'; //1

function firstNonRepeat(string) {
  const alphaObj = {};

  for (const char of string) {
    if (!alphaObj[char]) {
      alphaObj[char] = 1;
    } else {
      alphaObj[char] += 1;
    }
  }

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (alphaObj[char] === 1) {
      return i;
    }
  }

  return -1;
}

console.log(firstNonRepeat(string));

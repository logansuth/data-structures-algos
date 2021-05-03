/*
Given string of nonempty string of lowercase letters, non-neg int representing key

return new string shifting each letter in input string my k positions in alphabet

const string = "xyz"
const key = 2

output = "zab"

make object with alphabet letters

for each letter of string, find integer

add key, modulo 26

find new string,
*/

const createAlphabetObj = (alphaString) => {
  const obj = {};

  for (let i = 0; i < 27; i++) {
    obj[alphaString[i - 1]] = i;
  }

  return obj;
};

const encrypt = (string, key) => {
  const alphaString = 'abcdefghijklmnopqrstuvwxyz';
  const alphaObj = createAlphabetObj(alphaString);

  let newString = '';

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    let number = alphaObj[char];
    number = (number + key) % 26;
    if (number === 0) number = 26;
    newString += alphaString[number - 1];
  }

  return newString;
};

console.log(encrypt('heygurl', 52));

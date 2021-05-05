/*

args = string, stringDoc

can you gen document using available chars

if yes, return true, else false

can always generate an empty string

create an empty object

iterate through the string, and for each item
ask (if this key exists, add 1 to the value)
else (if key does not exist, create key with value 1)

iterate through the stringDoc and for each character, look that key up in the object
decrement value

move on to the next character

if you can't find the char in the object, or if the value is zero, return false

otherwise, after iterating through everything, return true

const string = 'abcdde'
const stringDoc = 'bacddde'  //false

const string2 = 'aaaaffff'
const stringDoc = 'af'  // true
*/

const string2 = 'aaaaffff';
const stringDoc = 'af'; // true

function genDoc(string, stringDoc) {
  const charObj = {};

  if (stringDoc.length === 0) return true;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (!charObj[char]) {
      charObj[char] = 1;
    } else {
      charObj[char] += 1;
    }
  }

  for (let i = 0; i < stringDoc.length; i++) {
    const char = stringDoc[i];

    if (!charObj[char] || charObj[char] < 1) {
      return false;
    } else {
      charObj[char] -= 1;
    }
  }

  return true;
}

console.log(genDoc(string2, stringDoc));

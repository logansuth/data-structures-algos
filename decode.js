/*
a = 1
b = 2
...
z = 26

Count the ways a message can be decoded

console.log(decode('111')) // 3
console.log(decode('2')) // 1
console.log(decode('79')) // 1
console.log(decode('26')) // 2

dynamic programming



*/

function decode(string) {
  const stringArr = string.split('');

  if (stringArr.length === 1) {
    return sum + 1;
  }

  return sum;
}

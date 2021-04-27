/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.

Leetcode #91
*/

function decode(string) {
  const memo = [1];

  function validate(string) {
    if (
      (string[0] === '1' && string[1] !== '0') ||
      (string[0] === '2' && string[1] < 7)
    ) {
      return 1;
    } else {
      return 0;
    }
  }

  for (let i = 1; i < string.length; i++) {
    memo[i] = memo[i - 1] + validate(string[i - 1] + string[i]);
  }

  return memo[string.length - 1];
}

console.log(decode('111')); // 3
console.log(decode('2')); // 1
console.log(decode('79')); // 1
console.log(decode('26')); // 2
console.log(decode('11133')); // 4
console.log(decode('1024')); // 2

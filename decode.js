/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

Leetcode #91
*/

function numDecodings(str) {
  const length = str.length;
  const memo = new Array(length + 1).fill(0);

  memo[length] = 1;
  memo[length - 1] = str[length - 1] == 0 ? 0 : 1;

  for (let i = length - 2; i > -1; i--) {
    if (str[i] == 0) {
      continue;
    }

    if (str[i] == 1) {
      memo[i] = memo[i + 1] + memo[i + 2];
    } else if (str[i] == 2) {
      memo[i] = memo[i + 1];
      if (str[i + 1] < 7) {
        memo[i] += memo[i + 2];
      }
    } else {
      memo[i] = memo[i + 1];
    }
  }

  return memo[0];
}

console.log(numDecodings('12345'));

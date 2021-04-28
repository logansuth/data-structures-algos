/*
Non-empty array of positive integers

represent amount of time it takes to execute certain queries

One query can be executed at a time

Can be executed in any order

Find minimum waiting time

[1, 4, 5]
in order:
[5, 1, 4] = 11 (0) + (5) + (5 + 1)

in order:
[1, 4, 5]  = 6

queries = [3, 2, 1, 2, 6]
output = 17

in order:
[1,     2,    2,       3,        6]

0       1    1 + 2   1+2+2     1+2+2+3

0      1       3      5          8

sort array

iterate through array and do math
*/

const QUERIES = [5, 1, 4];

function minimumWait(queries) {
  queries.sort((a, b) => a - b);

  const memo = [0];
  let sum = 0;

  for (let i = 1; i < queries.length; i++) {
    memo[i] = queries[i - 1] + memo[i - 1];
    sum += memo[i];
  }

  return sum;
}

console.log(minimumWait(QUERIES));

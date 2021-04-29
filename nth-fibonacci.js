/*

first number is 0
second number is 1
nth number is (n-1) + (n-2)

function takes integer n and returns nth fibonacci number

*/

function fibonacci(n, memo = {}) {
  if (memo[n]) return memo[n];

  if (n <= 1) {
    return (memo[n] = 0);
  } else if (n === 2) {
    return (memo[n] = 1);
  }

  return (memo[n] = fibonacci(n - 2, memo) + fibonacci(n - 1, memo));
}

console.log(fibonacci(5));

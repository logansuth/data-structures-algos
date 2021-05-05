// Write a recursive function that determines if a number is prime and returns true if it is

function isPrime(num, i) {
  if (num <= 2) {
    return num === 2 ? true : false;
  }
  if (num % i === 0) return false;
  if (i * i > num) return true;

  return isPrime(num, ++i);
}

console.log(isPrime(6, 2)); //true

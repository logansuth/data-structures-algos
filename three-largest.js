/*
without sorting input array, return the three largest numbers

three options,
less than lower bound,
  ignore it
more than higher bound
  shift everything down one
in between
  shift lower bound off
*/

const array = [141, 1, 17, -7, -27, 18, 541, 8, 7, 7];

function threeLarge(arr) {
  let lower = -Infinity;
  let middle = arr[0] > arr[1] ? arr[1] : arr[0];
  let upper = arr[0] > arr[1] ? arr[0] : arr[1];

  for (let i = 2; i < arr.length; i++) {
    const element = arr[i];

    if (element < lower) {
      continue;
    } else if (element > upper) {
      lower = middle;
      middle = upper;
      upper = element;
    } else if (element < middle) {
      lower = element;
    } else {
      lower = middle;
      middle = element;
    }
  }

  return [lower, middle, upper];
}

console.log(threeLarge(array));

/*

array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
output = 12

easy = [5, [2, 3]]
output = 5 + 2 * (2 + 3)
output = 15

initialize sum

if item is number, add to sum, else add 1 to depth and add items then multiply by them

*/

// function productSum(arr, depth = 1) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++ {
//     if
//   }
// }

const array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];

function productSum(arr, depth = 1) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += productSum(arr[i], depth + 1);
    } else {
      sum += arr[i];
    }
  }

  return sum * depth;
}

console.log(productSum(array));

/*
args = (non-empty array of ints, target sum)
returns = all triplets in array that sum to target sum, returned in TWO dimensional array, triplets should be in ascending order
also within the triplets

are the integers unique?  can they repeat?  Can we use them multiple times?

const array = [12, 3, 1, 2, -6, 5, -8, 6];
const target = 0

const sortedArray = [-8, -6, 1, 2, 3, 5, 6, 12]

STEPS:
sort the array

create empty array
Initialize two pointers (one for the beginning, one for the end)

Outer loop
while left < right - 1

if sums are greater than target, decrement the right pointer
else {
  create third pointer


}

while (left < right - 1) {
  i


}


*/
const array = [12, 3, 1, 2, -6, 5, -8, 6];
const target = 0;

function threeNumSum(array, target) {
  array = array.sort((a, b) => a - b);

  const finalArray = [];

  for (let i = 0; i < array.length - 2; i++) {
    const first = array[i];

    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      const second = array[left];
      const third = array[right];
      const currentSum = first + second + third;

      if (currentSum === target) {
        finalArray.push([first, second, third]);
        left++;
        right--;
      } else if (currentSum > target) {
        right--;
      } else {
        left++;
      }
    }
  }

  return finalArray;
}

console.log(threeNumSum(array, target));

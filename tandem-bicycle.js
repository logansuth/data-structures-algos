/*
two lists positive integers

if fastest = true find max speed
if not, find min speed

ex:

redSpeeds = [5, 5, 3, 9, 2]
blueSpeeds = [3, 6, 7, 2, 1]
fastest = true

sortedRed = [2, 3, 5, 5, 9]
sortedBlue = [1, 2, 3, 6, 7]

use pointers to iterate through arrays (start and stop)
while newArray.length < sortedArray.length

look at last item in both arrays
move pointer of whichever is higher, pair it with the lowest from other array

sortedRed = [5]
sortedBlue = [3]

finalArray = [[9, 1], [7, 2], [6, 3], [5, 2], [5, 3]]
output = 32
*/

function findSpeed(redArray, blueArray, fastest) {
  redArray.sort((a, b) => {
    return fastest ? a - b : b - a;
  });
  blueArray.sort((a, b) => {
    return fastest ? a - b : b - a;
  });

  let counter = 0;
  let sum = 0;

  let redPointer = redArray.length - 1;
  let bluePointer = blueArray.length - 1;

  while (counter < redArray.length) {
    if (fastest) {
      if (redArray[redPointer] > blueArray[bluePointer]) {
        sum += redArray[redPointer];
        redPointer--;
        counter++;
      } else {
        sum += blueArray[bluePointer];
        bluePointer--;
        counter++;
      }
    } else {
      if (redArray[redPointer] > blueArray[bluePointer]) {
        sum += redArray[redPointer];
        redPointer--;
        bluePointer--;
        counter++;
      } else {
        sum += blueArray[bluePointer];
        bluePointer--;
        redPointer--;
        counter++;
      }
    }
  }

  return sum;
}

const redSpeeds = [5, 5, 3, 9, 2];
const blueSpeeds = [3, 6, 7, 2, 1];

console.log(findSpeed(redSpeeds, blueSpeeds, false));

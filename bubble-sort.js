/*
two functions

one that compares elements, another that swaps them

start with zeroth element, and go to less than length - 1
*/

const array = [2, 1, 3, 5, 10, 8, 12, 73, 24];

function swap(array, firstInd, secondInd) {
  const placeHolder = array[firstInd];
  array[firstInd] = array[secondInd];
  array[secondInd] = placeHolder;

  return array;
}

function bubbleSort(array) {
  let endPointer = array.length - 1;

  while (endPointer > 0) {
    for (let i = 0; i < endPointer; i++) {
      const firstEl = array[i];
      const secondEl = array[i + 1];

      if (firstEl > secondEl) {
        array = swap(array, i, i + 1);
      }
    }

    endPointer--;
  }

  return array;
}

console.log(bubbleSort(array));

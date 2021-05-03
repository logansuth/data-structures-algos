/*
sorted array / unsorted part of the array

start at index 1

while index < array.length

loop, from start index down to zero

move to the left and if it's less than that element, shift it
if not, break

*/

const array = [2, 1, 3, 5, 10, 8, 12, 73, 24];

function shift(array, index, newItem) {
  array[index + 1] = array[index];
  array[index] = newItem;
}

function insertionSort(array) {
  let sortingIndex = 1;

  while (sortingIndex < array.length) {
    const toSort = array[sortingIndex];

    for (let i = sortingIndex - 1; i > -1; i--) {
      const toCheck = array[i];

      if (toCheck < toSort) {
        break;
      } else {
        shift(array, i, toSort);
      }
    }

    sortingIndex++;
  }

  return array;
}

console.log(insertionSort(array));

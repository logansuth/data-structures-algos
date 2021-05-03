/*
find mimimum number (set minimum at array[0])
save minimum index

const array = [8, 5, 2, 9, 5, 6, 3]

when finished iterating, move minimum to front, shift other numbers down

*/

const array = [8, 5, 2, 9, 5, 6, 3];

const shift = (array, toIndex, fromIndex) => {
  const placeHolder = array[fromIndex];

  for (let i = fromIndex; i > toIndex; i--) {
    array[i] = array[i - 1];
  }

  array[toIndex] = placeHolder;
};

const selectionSort = (array) => {
  let minValue = Infinity;
  let minIndex = Infinity;
  let sortedIndex = -1;

  while (sortedIndex < array.length - 1) {
    for (let i = sortedIndex + 1; i < array.length; i++) {
      const element = array[i];
      if (element < minValue) {
        minValue = element;
        minIndex = i;
      }
    }

    shift(array, sortedIndex + 1, minIndex);
    sortedIndex++;
    minIndex = Infinity;
    minValue = Infinity;
  }

  return array;
};

console.log(selectionSort(array));

/*
args = array of ints

each int reps a jump of its value in the array

create an array to keep track of whether each indice has been visited
set everything in it equal to true

const array = [2, 3, 1, -4, -4, 2] //true

12 + 4 = 16



*/
const array = [2, 2, 2]; //true

function hasSingleCycle(array) {
  let pointer = 0;
  let count = 0;

  const visited = new Array(array.length).fill(false);

  while (count < array.length) {
    const currNum = array[pointer];

    visited[pointer] = true;

    pointer += currNum;

    if (pointer >= array.length) {
      pointer = pointer % array.length;
    } else if (pointer < 0) {
      while (pointer < 0) {
        pointer = array.length + pointer;
      }
    }
    console.log(pointer);

    count++;
  }

  console.log(pointer);

  for (const number of visited) {
    if (!number) return false;
  }

  console.log(visited);

  return pointer === 0;
}

console.log(hasSingleCycle(array));

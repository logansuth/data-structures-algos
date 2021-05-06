/* eslint-disable no-constant-condition */
/*
args = (n * m two-dim array)
return = (one dim arrray elements in spiral order)

starts top left goes in spiral fashion

const array = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
]

const order = [right, down, left, up]

repeat

one pointer for directionality
two pointers, first for vertical, second for horizontal

want make sure that if we hit an index that doesn't exist, or
if we hit an index we've visited, we change direction

how do i store indices I've visited
create a matrix where I claim each spot as false, and set them to false as I traverse

how do I define directionality


right = increment second pointer
down = increment first pointer
left = decrement second pointer
up = decrement first pointer

STEPS

create an array for directionality
intialize a pointer at the first index

create a matrix for keeping track of what we've visiting
setting everything to false

then iterate through array, moving with directionality
if the next item is TRUE or Index does not exist, break

until I reach an undefined index, OR an index that is TRUE in the matrix
then switch to next directionality and continue moving


*/
const array = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];

function createMatrix(array) {
  const visited = new Array(array.length);
  for (let i = 0; i < visited.length; i++) {
    const innerArray = new Array(array[0].length).fill(false);
    visited[i] = innerArray;
  }

  return visited;
}

function spiralTraverse(array) {
  const finalArr = [];

  const directions = ['right', 'down', 'left', 'up'];
  let dirPointer = 0;

  let count = array.length * array[0].length;

  const visited = createMatrix(array);

  let first = 0;
  const firstMax = array.length;
  let second = 0;
  const secondMax = array[0].length;

  while (count > 0) {
    const direction = directions[dirPointer];

    if (direction === 'right') {
      while (true) {
        if (second === secondMax || visited[first][second]) {
          second--;
          first++;
          break;
        }
        finalArr.push(array[first][second]);
        visited[first][second] = true;
        second++;
        count--;
      }
    } else if (direction === 'down') {
      while (true) {
        if (first === firstMax || visited[first][second]) {
          first--;
          second--;
          break;
        }
        finalArr.push(array[first][second]);
        visited[first][second] = true;
        first++;
        count--;
      }
    } else if (direction === 'left') {
      while (true) {
        if (second === -1 || visited[first][second]) {
          second++;
          first--;
          break;
        }
        finalArr.push(array[first][second]);
        visited[first][second] = true;
        second--;
        count--;
      }
    } else {
      while (true) {
        if (first === -1 || visited[first][second]) {
          first++;
          second++;
          break;
        }
        finalArr.push(array[first][second]);
        visited[first][second] = true;
        first--;
        count--;
      }
    }

    dirPointer++;
    if (dirPointer === 4) dirPointer = 0;
  }

  return finalArr;
}

console.log(spiralTraverse(array));

// right = increment second pointer
// down = increment first pointer
// left = decrement second pointer
// up = decrement first pointer

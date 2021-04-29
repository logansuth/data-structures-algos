/*






*/

const redShirts = [1, 3, 5];
const blueShirts = [0, 4, 6];

function classPhotos(redShirts, blueShirts) {
  let count = 0;

  for (let i = 0; i < redShirts.length; i++) {
    if (redShirts[i] < blueShirts[i]) {
      count++;
    } else {
      count--;
    }
  }

  return Math.abs(count) === redShirts.length;
}

console.log(classPhotos(redShirts, blueShirts));

const sampleString = 'findMyLength';
console.log(findLength(sampleString)); //12

function nextIndex(string, index) {
  if (string[index] !== undefined) {
    return nextIndex(string, ++index);
  } else {
    return index;
  }
}

function findLength(string) {
  return nextIndex(string, 0);
}

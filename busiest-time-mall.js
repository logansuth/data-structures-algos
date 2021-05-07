const data = [
  [1487799425, 14, 1],
  [1487799425, 4, 0],
  [1487799425, 2, 0],
  [1487800378, 10, 1],
  [1487801478, 18, 0],
  [1487801478, 18, 1],
  [1487901013, 1, 0],
  [1487901211, 7, 1],
  [1487901211, 7, 0],
]; // output  1487800378

function busiestTime(array) {
  const peopleObj = {};
  let currPeople = 0;
  let maxPeople = 0;
  let busiestTime;

  for (let i = 0; i < array.length; i++) {
    const currTime = array[i][0];
    const entLeft = array[i][2];
    const numPeople = entLeft === 1 ? array[i][1] : -array[i][1];

    if (!peopleObj[currTime]) {
      peopleObj[currTime] = currPeople + numPeople;
      currPeople = peopleObj[currTime];
    } else {
      peopleObj[currTime] += numPeople;
      currPeople = peopleObj[currTime];
    }
  }

  for (let key in peopleObj) {
    if (peopleObj[key] > maxPeople) {
      busiestTime = key;
      maxPeople = peopleObj[key];
    } else if (peopleObj[key] === maxPeople) {
      busiestTime = busiestTime < key ? busiestTime : key;
    }
  }

  return busiestTime;
}

console.log(busiestTime(data));

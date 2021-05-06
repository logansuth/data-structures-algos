const array = [1, 2, 3, 3, 2, 1]; //8

function findPeaks(array) {
  let currentRun = 1;
  let maxRun = 0;
  let peakInc = false;
  let peakDec = false;

  for (let i = 1; i < array.length; i++) {
    const previous = array[i - 1];
    const current = array[i];

    if (current > previous) {
      // End of a run
      if (peakDec) {
        if (currentRun > maxRun) maxRun = currentRun;
        currentRun = 2;
        peakInc = true;
        peakDec = false;
        // Beginning or middle of a run (on the way up)
      } else {
        currentRun++;
        peakInc = true;
      }
    } else if (current < previous) {
      // if this is following an upwards run
      if (peakInc) {
        currentRun++;
        peakInc = false;
        peakDec = true;
      } else if (peakDec) {
        currentRun++;
      }
    } else {
      if (peakDec) {
        if (currentRun > maxRun) maxRun = currentRun;
        peakDec = false;
        peakInc = false;
        currentRun = 1;
      } else {
        peakDec = false;
        peakInc = false;
        currentRun = 1;
      }
    }
  }

  if (peakDec) {
    if (currentRun > maxRun) maxRun = currentRun;
  }

  return maxRun;
}

console.log(findPeaks(array));

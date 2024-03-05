const unsortedNumbers = [99, 44, 6, 1, 2, 5, 63, 87, 283, 4, 0]

function bubbleSort(numArr) {
  const length = numArr.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (numArr[j] > numArr[j + 1]) {
        const temp = numArr[j];
        numArr[j] = numArr[j + 1]
        numArr[j + 1] = temp;
      }
    }
  }

  return numArr;
}

function bubbleSortOptimized(numArr) {
  const length = numArr.length;

  for (let i = 0; i < length; i++) {
    let swapped = false;

    for (let j = 0; j < length; j++) {
      if (numArr[j] > numArr[j + 1]) {
        const temp = numArr[j];
        numArr[j] = numArr[j + 1];
        numArr[j + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return numArr;
}

console.log(bubbleSort(unsortedNumbers));
console.log(bubbleSortOptimized(unsortedNumbers));
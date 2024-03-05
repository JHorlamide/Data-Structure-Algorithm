const numbers = [-2, 45, 0, 11, -9];
const unsortedNumbers = [99, 44, 6, 1, 2, 5, 63, 87, 283, 4, 0]


function selectionSort(arr) {
  const length = arr.length;

  for (let step = 0; step < length; step++) {
    let min_idx = step;

    for (let i = step + 1; i < length; i++) {
      if (arr[i] < arr[min_idx]) {
        min_idx = i;
      }
    }

    const temp = arr[step];
    arr[step] = arr[min_idx];
    arr[min_idx] = temp;
  }

  return arr;
}

console.log(selectionSort(unsortedNumbers));
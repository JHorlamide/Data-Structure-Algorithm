const numbers = [99, 44, 6, 1, 2, 5, 63, 87, 283, 4, 0];

// [1, 6, 44, 99, 2, 5, 63, 87, 283, 4, 0];

function insertionSort(arr) {
  const length = arr.length;

  for (let step = 1; step < length; step++) {
    const key = arr[step]; // 2
    let i = step - 1; // 3

    while (i >= 0 && key < arr[i]) {
      arr[i + 1] = arr[i]
      i--;
    }

    arr[i + 1] = key;
  }

  return arr;
}

console.log(insertionSort(numbers));


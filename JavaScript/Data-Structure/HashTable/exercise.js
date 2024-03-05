// [2, 5, 1, 2, 3, 5, 1, 2, 4]

// [2, 1, 1, 2, 3, 5, 1, 2, 4]

// [2, 3, 4, 5]

function findFirstRecurringNumber(arr) {
  const tracker = {};

  for (let i = 0; i < arr.length; i++) {
    if (tracker[arr[i]]) {
      return arr[i];
    }

    tracker[arr[i]] = arr[i];
  }

  return undefined;
}

console.log(findFirstRecurringNumber([2, 3, 4, 5]))

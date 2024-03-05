const numbers = [6, 5, 12, 10, 9, 1];
const numbers2 = [8, 2, 4, 1, 3];

// left = [8, 2]
// right = [4, 1, 3]

function sortRecursive(arr) {
  if (arr.length <= 2) {
    return arr[arr.length];
  }

  /* Divide Array */
  const middle = Math.floor(arr.length / 2);

  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle);

  /* Sort the two half */
  sortRecursive(leftArr);
  sortRecursive(rightArr);

  /* Merge leftArr & rightArr */
  mergeArr(leftArr, rightArr, arr);

  return arr;
}


function mergeArr(leftArr, rightArr, resultArr) {
  let i = 0; // Counter for leftArr
  let j = 0; // Counter for rightArr
  let k = 0; // Counter for resultArr

  /**
   * Until we reach either end of either leftArr or rightArr, pick larger among
   * elements leftArr and rightArr and place them in the correct position at resultArr
   * **/
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      resultArr[k++] = leftArr[i++];
    } else {
      resultArr[k++] = rightArr[j++];
    }
  }

  /**
   * When we run out of elements in either leftArr or rightArr, 
   * pick up the remaining elements and put in resultArr
   * **/
  while (i < leftArr.length) {
    resultArr[k++] = leftArr[i++];
  }

  while (j < rightArr.length) {
    resultArr[k++] = rightArr[j++];
  }
}

console.log(sortRecursive(numbers));
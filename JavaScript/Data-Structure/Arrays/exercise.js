const reverseString = (str) => {
  if (!str || str.length < 1 || typeof str !== "string") {
    return;
  }

  return str.split("").reverse().join("");
}

const reverseString2 = (str) => {
  if (!str || str.length < 1 || typeof str !== "string") {
    return;
  }

  let result = [];
  const totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    result.push(str[i]);
  }

  return result.join("");
}

function mergeSortedArray(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  return [...arr1, ...arr2].sort((a, b) => a - b);
}

console.log(mergeSortedArray([0, 3, 4, 31], [4, 6, 30]))
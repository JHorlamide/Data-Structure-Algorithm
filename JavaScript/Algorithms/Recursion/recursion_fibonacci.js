/* Fibonacci Sequence */
// n = 2, FS: 0, 1, 1
// n = 3, FS: 0, 1, 1, 2
// n = 5, FS: 0, 1, 1, 2, 3, 5
// n = 8, FS: 0, 1, 1, 2, 3, 5, 8, 13, 21

function fibonacciRecursive(n) { // O(2^n)
  if (n <= 1) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function fibonacciIterative(n) { // O(n)
  let arr = [0, 1];
  let counter = 2;

  while (counter <= n) {
    arr.push(arr[counter - 1] + arr[counter - 2]);
    counter++;
  }

  return arr[n];
}

// Example usage
console.log("Fibonacci Recursive ->", fibonacciRecursive(3));
console.log("Fibonacci Iterative ->", fibonacciIterative(3));

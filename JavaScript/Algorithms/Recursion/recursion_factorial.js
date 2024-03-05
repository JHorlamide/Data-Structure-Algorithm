/* Factorial */
function findFactorialRecursive(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * findFactorialRecursive(n - 1);
  }
}

function findFactorialIterative(n) {
  let base = 1;

  while (n > 1) {
    base *= n;
    n--;
  }

  return base;
}

// Example usage
console.log("Factorial Recursive: ", findFactorialRecursive(5));
// console.log("Factorial Iterative :", findFactorialIterative(5));
console.log({ factorial: 5 * 4 * 3 * 2 * 1 })
# Factorial
def find_factorial_recursive(n):
    if n == 0:
        return 1
    else:
        return find_factorial_recursive(n - 1) * n


def find_factorial_iterative(n):
    base = 1

    while n > 1:
        base *= n
        n -= 1

    return base


# Example Usage
# print(f"Recursive: {find_factorial_recursive(5)}")
# print(f"Iterative: {find_factorial_iterative(5)}")


# Factorial
def fibonacci_recursive(n):
    if n <= 1:
        return n

    return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)


def fibonacci_iterative(n):
    arr = [0, 1]
    counter = 2

    while counter <= n:
        arr.append(arr[counter - 1] + arr[counter - 2])
        counter += 1

    return arr[n]


# Example Usage
print(f"Fibonacci Recursive: {fibonacci_recursive(5)}")
print(f"Fibonacci Iterative: {fibonacci_iterative(5)}")

from typing import List


numbers = [8, 2, 4, 1, 3]


def binary_search_iterative(list, target):
    first_element = 0
    last_element = len(list) - 1

    while first_element <= last_element:
        midpoint = (first_element + last_element) // 2

        if list[midpoint] == target:
            return midpoint

        if list[midpoint] < target:
            first_element = midpoint + 1
        else:
            last_element = midpoint - 1

    return None


def binary_search(list: List[int], target: int, left: int, right: int):
    if right < left:
        return None

    midpoint = (left + right) // 2

    if list[midpoint] == target:
        return midpoint

    if list[midpoint] < target:
        return binary_search(list, target, midpoint + 1, right)
    else:
        return binary_search(list, target, left, midpoint - 1)


def binary_search_recursive(list: List[int], target: int):
    return binary_search(list, target, 0, len(list) - 1)


def verify(index):
    if index is not None:
        print(f"Target found at index {index}")
    else:
        print("Target not found")


# Example One
result = verify(binary_search_iterative(numbers, 2))

print(result)

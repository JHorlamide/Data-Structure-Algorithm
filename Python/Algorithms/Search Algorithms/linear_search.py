def linear_search(list, target):
    """
    Returns the index position of the target value, else returns None
    """

    for index in range(0, len(list)):
        if list[index] == target:
            return index

    return None


def verify(index):
    if index is not None:
        print(f"Target found at index {index}")
    else:
        print("Target not found")


numbers = [i for i in range(0, 11)]

# Example One
result = linear_search(numbers, 12)
verify(result)

# Example Two
result = linear_search(numbers, 5)
verify(result)

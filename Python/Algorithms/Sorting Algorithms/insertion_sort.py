numbers = [99, 44, 6, 1, 2, 5, 63, 87, 283, 4, 0]


def insertion_sort(arr):
    length = len(arr)

    for step in range(1, length):
        key = arr[step]
        i = step - 1

        while i >= 0 and key < arr[i]:
            arr[i + 1] = arr[i]
            i -= 1

        arr[i + 1] = key

    return arr


print(insertion_sort(numbers))

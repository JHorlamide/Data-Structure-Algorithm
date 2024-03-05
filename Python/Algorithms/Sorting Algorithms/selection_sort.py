numbers = [-2, 45, 0, 11, -9]
unsortedNumbers = [99, 44, 6, 1, 2, 5, 63, 87, 283, 4, 0]


def selection_sort(arr):
    arr_len = len(arr)

    for step in range(arr_len):
        min_idx = step

        for i in range(step + 1, arr_len):
            if arr[i] < arr[min_idx]:
                min_idx = i

        temp = arr[step]
        arr[step] = arr[min_idx]
        arr[min_idx] = temp

        # (arr[step], arr[min_idx]) = (arr[min_idx], arr[step])

    return arr


print(selection_sort(numbers))

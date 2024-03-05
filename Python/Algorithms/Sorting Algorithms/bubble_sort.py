numbers = [99, 44, 6, 1, 2, 5, 63, 87, 283, 4, 0]


def bubble_sort(num_arr):
    arr_len = len(num_arr)

    for i in range(arr_len):
        for j in range(0, arr_len - i - 1):
            if num_arr[j] > num_arr[j + 1]:
                temp = num_arr[j]
                num_arr[j] = num_arr[j + 1]
                num_arr[j + 1] = temp

    return num_arr


def bubble_sort_optimized(num_arr):
    arr_len = len(num_arr)

    for i in range(arr_len):
        swapped = False

        for j in range(0, arr_len - i - 1):
            if num_arr[j] > num_arr[j + 1]:
                temp = num_arr[j]
                num_arr[j] = num_arr[j + 1]
                num_arr[j + 1] = temp
                swapped = True

        if not swapped:
            break

    return num_arr


# print(bubble_sort(numbers))
print(bubble_sort_optimized(numbers))

def sort(arr: list):
    if len(arr) <= 1:
        return

    # Divide Array
    middle = len(arr) // 2

    left_arr = arr[:middle]
    right_arr = arr[middle:]

    # Sort the two half
    sort(left_arr)
    sort(right_arr)

    # Merge leftArr & rightArr
    merge(left_arr, right_arr, arr)

    return arr


def merge(left_arr: list, right_arr: list, result_arr: list):
    i = 0  # counter for left_arr
    j = 0  # counter for right_arr
    k = 0  # counter for result_arr

    # Until we reach either end of either leftArr or rightArr, pick larger among
    # elements leftArr and rightArr and place them in the correct position at resultArr
    while i < len(left_arr) and j < len(right_arr):
        if left_arr[i] <= right_arr[j]:
            result_arr[k] = left_arr[i]
            i += 1

        else:
            result_arr[k] = right_arr[j]
            j += 1

        k += 1

    # When we run out of elements in either leftArr or rightArr,
    # pick up the remaining elements and put in resultArr
    while i < len(left_arr):
        result_arr[k] = left_arr[i]
        i += 1
        k += 1

    while j < len(right_arr):
        result_arr[k] = right_arr[j]
        j += 1
        k += 1


print(sort([8, 2, 4, 1, 3]))

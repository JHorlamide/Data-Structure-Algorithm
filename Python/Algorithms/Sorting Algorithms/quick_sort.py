from typing import List


class QuickSort:
    def __init__(self) -> None:
        pass

    def sort(self, arr):
        self._sort(arr, 0, len(arr) - 1)
        return arr

    def _sort(self, arr: List[int], start: int, end: int):
        if start >= end:
            return

        # partition arr
        boundary = self._partition(arr, start, end)

        # Sort left items
        self._sort(arr, start, boundary - 1)

        # Sort right items
        self._sort(arr, boundary + 1, end)

    def _partition(self, arr: List[int], start: int, end: int) -> int:
        pivot = arr[end]

        boundary = start - 1

        for i in range(start, end):
            if arr[i] <= pivot:
                boundary += 1

                temp = arr[i]
                arr[i] = arr[boundary]
                arr[boundary] = temp

        (arr[boundary + 1], arr[end]) = (arr[end], arr[boundary + 1])

        return boundary + 1


numbers = [15, 6, 3, 1, 22, 10, 13]
quick_sort = QuickSort()

print(quick_sort.sort(numbers))

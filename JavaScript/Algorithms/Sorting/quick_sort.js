const numbers = [15, 6, 3, 1, 22, 10, 13];

class QuickSort {
  sort(arr) {
    this._sort(arr, 0, arr.length - 1);
    return arr;
  }

  _sort(arr, start, end) {
    if (start >= end) return;

    /* Partition Array */
    const boundary = this._partition(arr, start, end);

    /* Sort Left */
    this._sort(arr, start, boundary - 1);

    /* Sort right */
    this._sort(arr, boundary + 1, end);
  }

  /**
   * @para int []
   * @return int
   * @description the int value return is the index
   * of the pivot after it has moved to it correct position
   * 
  */
  _partition(arr, start, end) {
    const pivot = arr[end];

    let boundary = start - 1;

    for (let i = start; i <= end; i++) {
      if (arr[i] <= pivot) {
        boundary++;
        const temp = arr[i];
        arr[i] = arr[boundary];
        arr[boundary] = temp;
        // this.swap(arr, i, ++boundary);
      }
    }

    return boundary;
  }

  _swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
}

const quickSort = new QuickSort();
console.log(quickSort.sort(numbers));

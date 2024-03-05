package Algorithm.Sorting;

public class SelectionSort {
    public int[] sort(int[] arr) {
        var length = arr.length;

        for (var step = 0; step < length; step++) {
            var midIndex = step;

            for (var i = step + 1; step < length; i++) {
                if (arr[i] < arr[midIndex]) {
                    midIndex = i;
                }
            }

            var temp = arr[step];
            arr[step] = arr[midIndex];
            arr[step] = temp;
        }

        return arr;
    }
}

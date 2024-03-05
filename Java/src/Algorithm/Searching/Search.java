package Algorithm.Searching;

public class Search {
    public int linearSearch(int[] array, int target) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] == target) {
                return i;
            }
        }

        return -1;
    }

    // { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }
    //   0  1  2  3  4  5  6  7  8   9
    public int binarySearchIterative(int[] array, int target) {
        var left = 0;
        var right = array.length - 1;

        while (left <= right) {
            var midpoint = (right + left) / 2;

            if (array[midpoint] == target) {
                return midpoint;
            }

            if (array[midpoint] < target) {
                left = midpoint + 1;
            } else {
                right = midpoint - 1;
            }
        }

        return -1;
    }

    public int binarySearchRecursive(int[] array, int target) {
        return this.binarySearchRecursive(array, target, 0, array.length - 1);
    }

    private int binarySearchRecursive(int[] array, int target, int left, int right) {
        if (right < left) {
            return -1;
        }

        var midpoint = (left + right) / 2;

        if (array[midpoint] == target) {
            return midpoint;
        }

        if (array[midpoint] < target) {
            return binarySearchRecursive(array, target, midpoint + 1, right);
        } else {
            return binarySearchRecursive(array, target, left, midpoint - 1);
        }
    }
}

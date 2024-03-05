import Algorithm.Searching.Search;

public class Main {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        var search = new Search();
        var result = search.binarySearchRecursive(array, 40);
        System.out.println(result);
    }
}
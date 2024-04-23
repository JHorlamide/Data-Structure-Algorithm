package Data_Structure.Arrays;

import java.util.Arrays;
import java.util.HashSet;

public class Array {
   private int[] arrayItems;
   private int insertCount;

   public Array(int length) {
      arrayItems = new int[length];
   }

   public void insert(int item) {
      //If the array is full, resize it.
      if (arrayItems.length == insertCount) {
         // Create a new array
         int[] newArrayBucket = new int[insertCount * 2];

         // copy all exiting arrayItems to new array.
         System.arraycopy(arrayItems, 0, newArrayBucket, 0, insertCount);

         // Set "arrayItems" to newArrayItems
         arrayItems = newArrayBucket;
      }

      // Add the new items at the end
      this.arrayItems[insertCount++] = item;
   }

   public void print() {
      for (int i = 0; i < insertCount; i++) {
         System.out.println(arrayItems[i]);
      }
   }

   public void removeAt(int index) {
      // Validate the given index
      if (index < 0 || index >= insertCount) {
         throw new IllegalArgumentException();
      }

      //Shift the remaining items to the left to fill the hole
      // Example: [10, 20, 30, 40];
      // Given Index: 1;
      // 1 <- 2
      // 2 <- 3
      for (int i = index; i < insertCount; i++) {
         arrayItems[i] = arrayItems[i + 1];
      }

      insertCount--;
   }

   public int indexOf(int item) {
      // Loop through the item, if we find the item, we return the index
      for (int i = 0; i < insertCount; i++) {
         if (arrayItems[i] == item) {
            return i;
         }
      }

      // else we return  -1
      return -1;
   }

   public int maxValue() { // Runtime Complexity is O(n)
      int max = arrayItems[0];

      for (int i = 1; i < insertCount; i++) {
         if (arrayItems[i] > max) {
            max = arrayItems[i];
         }
      }

      return max;

      //return Data_Structure.Arrays.stream(arrayItems).max().getAsInt();
   }

   public void getCommonItem(Array newArray) {
      HashSet<Integer> set = new HashSet<>();

      for (int i = 0; i < insertCount; i++) {
         set.add(arrayItems[i]);
      }

      for (int j : newArray.arrayItems) {
         if (set.contains(j)) {
            System.out.println(j + " ");
         }
      }
   }

   public int[] reverse() {
      int[] newItems = new int[insertCount];
      int count = 0;

      for (int i = insertCount; i > 0; i--) {
         newItems[count++] = arrayItems[i - 1];
      }

      return newItems;
   }

   public boolean hasTwoCommonItems() {
      HashSet<Integer> set = new HashSet<>();

      for (int i = 0; i < insertCount; i++) {
         if (set.contains(arrayItems[i])) {
            return true;
         }

         set.add(arrayItems[i]);
      }

      return false;
   }

   public void insertAt(int item, int index) {
      // item => 6
      // index => 1
      // [1, 2, 3, 4, 5]
      // [1, 6, 2, 3, 4, 5]

      // validate the index
      if (index < 0 || index > insertCount) {
         throw new IllegalArgumentException();
      }

      // Copy the array items starting from the insertion index to the last item;
      int[] copiedArrayItems = new int[insertCount - 1];

      System.arraycopy(arrayItems, index, copiedArrayItems, index - 1, insertCount - index);

      System.out.println("CopiedArrayItems: " + Arrays.toString(copiedArrayItems));
      // Increase the size of the array
      int[] newItems = new int[insertCount + index];

      if (insertCount >= 0) System.arraycopy(arrayItems, 0, newItems, 0, insertCount);

      arrayItems = newItems;
      System.out.println("Increased arrayItem size: " + Arrays.toString(arrayItems));

      // Insert the item at the given index, and insert the copied items.
      for (int i = 0; i < copiedArrayItems.length; i++) {
         if (i == index) {
            arrayItems[index] = item;
            continue;
         }

         arrayItems[index + i] = copiedArrayItems[i];
      }

      System.out.println("Updated arrayItem: " + Arrays.toString(arrayItems));
   }
}

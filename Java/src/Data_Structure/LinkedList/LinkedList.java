package Data_Structure.LinkedList;

import java.util.NoSuchElementException;

public class LinkedList {
   private final int NOT_FOUND = -1;
   private Node head; // first
   private Node tail; // last
   private int size;

   // addLast
   public void append(int item) {
      var node = new Node(item);

      if (isEmpty()) {
         head = tail = node;
      } else {
         tail.next = node;
         tail = node;
      }

      size++;
   }

   // addFirst
   public void prepend(int item) {
      var node = new Node(item);

      if (isEmpty()) {
         head = tail = node;
      } else {
         node.next = head;
         head = node;
      }

      size++;
   }

   public int indexOf(int item) {
      int index = 0;
      Node current = head;

      while (current != null) {
         if (current.value == item) {
            return index;
         }

         current = current.next;
         index++;
      }

      return NOT_FOUND;
   }

   public boolean contains(int item) {
      return indexOf(item) != NOT_FOUND;
   }

   public void removeFist() {
      if (isEmpty())
         return;

      if (head == tail) {
         head = tail = null;
      } else {
         var second = head.next;
         head.next = null;
         head = second;
      }

      size--;
   }

   public void removeLast() {
      // [10 -> 20 -> 30]
      if (isEmpty()) {
         throw new NoSuchElementException();
      }

      if (head == tail) {
         head = tail = null;
      } else {
         var previous = getPreviousNode(tail);
         tail = previous;
         tail.next = null;
      }

      size--;
   }

   public int size() {
      return this.size;
   }

   public int[] toArray() {
      int[] array = new int[size];
      Node current = head;
      int index = 0;

      while (current != null) {
         array[index++] = current.value;
         current = current.next;
      }

      return array;
   }

   public void reverse() {
      if (isEmpty()) {
         return;
      }

      // [10 -> 20 -> 30] = reversed = [30 -> 20 -> 10]
      /* First Approach */
      Node current = head;
      Node previous = null;
      Node next = null;

      while (current != null) {
         next = current.next;
         current.next = previous;
         previous = current;
         current = next;
      }

      head = previous;
   }

   public void reverse2() {
      if (isEmpty()) {
         return;
      }

      /* Second Approach */
      // [10 -> 20 -> 30] = reversed = [30 <- 20 <- 10]
      Node current = head;
      Node second = current.next;

      while (second != null) {
         var temp = second.next;
         second.next = current;
         head = second;
         second = temp;
      }

      head.next = null;
      head = current;
   }

   public Node getKthNodeFromTheEnd(int k) {
      // [10 -> 20 -> 30 -> 40 -> 50]
      // k = 1 => 50
      // k = 2 => 40
      // k = 3 => 30

      if (isEmpty()) {
         throw new NoSuchElementException();
      }

      if (k < 0 || k == 0) {
         throw new IllegalArgumentException();
      }

      Node currentNode = head;
      int count = 0;

      while (count != size - k) {
         currentNode = currentNode.next;
         count++;
      }

      return currentNode;
   }

   private Node getPreviousNode(Node node) {
      Node current = head;

      while (current != null) {
         if (current.next == node) {
            return current;
         }

         current = current.next;
      }

      return null;
   }

   private boolean isEmpty() {
      return head == null;
   }

   private class Node {
      private int value;
      private Node next;

      public Node(int value) {
         this.value = value;
      }
   }
}

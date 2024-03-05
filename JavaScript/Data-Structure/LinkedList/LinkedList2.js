class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// { head: { value: 3, next: { value: 5, next: { value: 20, next: null } } } }

// [3, 5, 20 ]

// 10 ---> 5 ---> 16 ---> 20 ----> 14 ---> 18

class LinkedList {
  constructor(data) {
    this.head = new Node(data)
    this.tail = this.head;
    this.size = 1;
  }

  append(data) {
    const newNode = new Node(data);

    if (this._isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  prepend(data) {
    const newNode = new Node(data);

    if (this._isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  insert(index, data) {
    if (index >= this.size) {
      return this.append(data);
    }

    const newNode = new Node(data);

    const leader = this._getNodeBeforeGivenIndex(index - 1);
    const followingNode = leader.next;
    leader.next = newNode;
    newNode.next = followingNode;
    this.size++;
  }

  remove(index) {
    if (index >= this.size) {
      return "Invalid index";
    }

    const leader = this._getNodeBeforeGivenIndex(index - 1);
    const nodeToBeRemoved = leader.next;
    const followingNode = nodeToBeRemoved.next;
    leader.next = followingNode
    this.size--;
  }

  indexOf(data) {
    let count = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === data) return count;

      currentNode = currentNode.next;
      count++;
    }

    return -1;
  }

  contains(data) {
    return this.indexOf(data) !== -1;
  }

  removeFirst() {
    if (this._isEmpty()) {
      return "No such element";
    }

    if (this.head == this.tail) {
      this.head = this.tail = null;
    }

    const second = this.head.next;
    this.head.next = null;
    this.head = second;
    this.size--;
  }

  removeLast() {
    if (this._isEmpty()) {
      return "No such element";
    }

    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      const previous = this._getPrevious(this.tail);
      this.tail = previous;
      this.tail.next = null;
    }

    this.size--;
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let head = this.head;
    this.tail = this.head;
    let second = head.next;

    while (second) {
      const temp = second.next;
      second.next = head;
      head = second;
      second = temp;
    }

    this.head.next = null;
    this.head = head;
  }

  reverse2() {
    if (this._isEmpty()) {
      return;
    }

    if (!this.head.next) {
      return this.head;
    }
    // [ 1, 10, 30, 5, 20 ]
    let currentNode = this.head;
    let previousNode = null;
    let next = null;

    while (currentNode !== null) {
      next = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = next;
    }

    this.head = previousNode;
  }

  getKthNodeFromTheEnd(kIndex) {
    // [10 -> 20 -> 30 -> 40 -> 50]
    // k = 1 => 50
    // k = 2 => 40
    // k = 3 => 30

    if (this._isEmpty()) {
      return -1;
    }

    if (kIndex < 0 || kIndex === 0) {
      return "Invalid index"
    }

    let count = 0;
    let currentNode = this.head;

    while (count !== this.size - kIndex) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode.value;
  }

  print() {
    const nodeArr = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      nodeArr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return nodeArr;
  }
  

  _getNodeBeforeGivenIndex(index) {
    let count = 0;
    let currentNode = this.head;

    while (count !== index) {
      currentNode = currentNode.next;
      count++
    }

    return currentNode;
  }

  _getPrevious(node) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.next === node) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }


  _isEmpty() {
    return this.head === null;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(20);
myLinkedList.prepend(1);
myLinkedList.insert(2, 30);
// myLinkedList.remove(2);
// myLinkedList.removeFirst();
// console.log(myLinkedList.contains(20));
// myLinkedList.reverse();

console.log(myLinkedList.getKthNodeFromTheEnd(0))
console.log(myLinkedList.print());

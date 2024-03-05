// 10 ---> 5 ---> 16 ---> 20 ----> 14 ---> 18

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(data) {
    this.head = {
      value: data,
      next: null
    }

    this.tail = this.head;
    this.size = 1;
  }

  append(data) {
    const newNode = new Node(data);

    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  prepend(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  insert(index, data) {
    // validate more params

    if (index >= this.size) {
      return this.append(data);
    }

    const newNode = new Node(data);

    const nodeBeforeCurrentIndex = this.getNodeBeforeGivenIndex(index - 1);
    const followingNode = nodeBeforeCurrentIndex.next;
    nodeBeforeCurrentIndex.next = newNode;
    newNode.next = followingNode;
    this.size++;
    return this.print();
  }

  getNodeBeforeGivenIndex(index) {
    // validate params
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++
    }

    return currentNode;
  }

  // [ 1, 10, 20, 5, 30 ]
  remove(index) {
    // validate params and do some checks
    if (index >= this.size) {

    }

    const nodeBeforeCurrentIndex = this.getNodeBeforeGivenIndex(index - 1);
    const unWantedNode = nodeBeforeCurrentIndex.next
    nodeBeforeCurrentIndex.next = unWantedNode.next;
    this.size--;
  }

  print() {
    const nodeValues = [];

    let currentNode = this.head;

    while (currentNode !== null) {
      nodeValues.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return nodeValues;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(20);
myLinkedList.append(5);
myLinkedList.prepend(1);

myLinkedList.insert(3, 30);
myLinkedList.remove(3)
console.log(myLinkedList.print());

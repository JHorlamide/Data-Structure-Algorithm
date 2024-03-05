// 10  <---> 5 <---> 16 <---> 20 <----> 14 <---> 18

class Node {
  constructor(data) {
    this.value = data;
    this.prev = null;
    this.next = null;
  }
}

// { value: 2, next: { value: 30, next: { value: 5, next: null } } }

class DoublyLinkedList {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.size = 1;
  }

  append(data) {
    const newNode = new Node(data);

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  prepend(data) {
    const newNode = new Node(data);
    const currentNode = this.head;

    newNode.next = currentNode;
    this.head.prev = newNode;
    this.head = newNode;
    this.size++;
  }

  insert(index, data) {
    // validate more params

    if (index >= this.size) {
      return this.append(data);
    }

    const newNode = new Node(data);
    const nodeBeforeGivenIndex = this.getNodeBeforeGivenIndex(index - 1);
    const follower = nodeBeforeGivenIndex.next;
    newNode.prev = nodeBeforeGivenIndex;
    nodeBeforeGivenIndex.next = newNode;
    newNode.next = follower;
    follower.prev = newNode;
    this.size++;
  }

  // [ 1, 10, 30, 20, 5 ]
  remove(index) {
    const nodeBeforeGiveIndex = this.getNodeBeforeGivenIndex(index - 1);
    const unWantedFollower = nodeBeforeGiveIndex.next;
    const nextFollower = unWantedFollower.next;

    nodeBeforeGiveIndex.next = nextFollower;
    nextFollower.prev = nodeBeforeGiveIndex;

    this.size--;
  }


  getNodeBeforeGivenIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  print() {
    const nodeValues = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      nodeValues.push(currentNode.value)
      currentNode = currentNode.next;
    }

    return nodeValues;
  }
}

const doublyLinkedList = new DoublyLinkedList(10);

doublyLinkedList.append(20)
doublyLinkedList.append(5)
doublyLinkedList.prepend(1);
doublyLinkedList.insert(2, 30);
doublyLinkedList.remove(2);
console.log("Node Values: ", doublyLinkedList.print(), "Length: ", doublyLinkedList.size);
console.log(doublyLinkedList);
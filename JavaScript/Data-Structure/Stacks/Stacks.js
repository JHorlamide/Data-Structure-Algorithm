class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null
    this.tail = null;
    this.size = null;
  }

  peek() {
    if (this._isEmpty()) {
      return null;
    }

    return this.head.value;
  }

  push(value) {
    const newNode = new Node(value);

    if (this._isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  pop() {
    if (this._isEmpty()) {
      return null;
    }

    if (this.head === this.tail) {
      return this.head = this.tail = null;
    }

    this.head = this.head.next;
    this.size--;
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

  _isEmpty() {
    return this.head === null;
  }
}

const myStack = new Stack();

myStack.push("Google")
myStack.push("Udemy");
myStack.push("Discord");
myStack.pop()
// console.log(myStack.peek())

console.log(myStack.print());
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  peek() {
    if (this._isEmpty()) {
      return null;
    }

    return this.first.value;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this._isEmpty()) {
      this.first = this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
  }

  dequeue() {
    if (this._isEmpty()) {
      return null;
    }

    if (this.first === this.last) {
      return this.first = this.last = null;
    }

    this.first = this.first.next;
    this.size--;
  }

  print() {
    const nodeArr = [];
    let currentNode = this.first;

    while (currentNode !== null) {
      nodeArr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return nodeArr.reverse();
  }

  _isEmpty() {
    return this.first === null;
  }
}

const queue = new Queue();

queue.enqueue("Olamide");
queue.enqueue("Joy");
queue.enqueue("Matt");
queue.enqueue("Pavel");
queue.enqueue("Samir");
queue.dequeue();

// console.log(myQueue.peek());
console.log(queue.print());
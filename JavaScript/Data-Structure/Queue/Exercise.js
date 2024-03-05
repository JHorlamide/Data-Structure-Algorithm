class MyQueue {
  constructor() {
    this.stack = []
  }

  peek() {
    if (this.empty()) {
      return undefined;
    }

    return this.stack[this.stack.length - 1];
  }

  push(value) {
    const newStack = [];

    while (this.stack.length > 0) {
      newStack.push(this.stack.pop());
    }

    newStack.push(value);

    while (newStack.length > 0) {
      this.stack.push(newStack.pop());
    }
  }

  pop() {
    if (this.empty()) {
      return undefined;
    }

    return this.stack.pop();
  }

  empty() {
    return this.stack.length === 0;
  }
}

const queue = new MyQueue();

queue.push("Olamide");
queue.push("Joy");
queue.push("Matt");
queue.push("Pavel");
queue.push("Samir");
console.log(queue.peek())
queue.pop()

console.log(queue.stack)

const myArr = []

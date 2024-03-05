class Stack {
  constructor() {
    this.stack = [];
  }

  peek() {
    if (this.stack.length === 0) {
      return null;
    }

    return this.stack[this.stack.length - 1];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    this.stack.pop();
  }
}

const myStack = new Stack();
myStack.push("Google");
myStack.push("Udemy");
myStack.push("Discord");
myStack.pop()
myStack.pop()

// console.log(myStack.peek());
console.log(myStack.stack);
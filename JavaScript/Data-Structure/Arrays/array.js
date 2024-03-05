class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  getItem(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    return this.length++;
  }

  pop() {
    const lastItem = this.length - 1;
    delete this.data[lastItem];
    this.length--;
    return lastItem;
  }

  delete(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArray = new MyArray();

myArray.push("Olamide");
myArray.push("Hi");
myArray.push("You");
myArray.delete(1)
console.log(myArray)

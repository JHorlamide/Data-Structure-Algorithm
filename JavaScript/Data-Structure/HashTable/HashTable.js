class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key, value) {
    const hashAddress = this._hash(key);

    if (!this.data[hashAddress]) {
      this.data[hashAddress] = [];
    }

    this.data[hashAddress].push([key, value]);
    return this.data;
  }

  get(key) {
    const hashAddress = this._hash(key);
    const currentBucket = this.data[hashAddress];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }

    return undefined;
  }

  keys() {
    const keyArr = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keyArr.push(this.data[i][0][0]);
      }
    }

    return keyArr;
  }

  values() {
    const valueArr = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        valueArr.push(this.data[i][0][1]);
      }
    }

    return valueArr;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("apple", 54);
myHashTable.set("oranges", 20);

console.log(myHashTable.keys());
console.log(myHashTable.values());

// console.log(JSON.stringify(myHashTable.data));

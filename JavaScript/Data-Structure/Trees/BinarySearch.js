class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      return this.root = newNode;
    }

    let currentNode = this.root;

    while (true) {
      if (value < currentNode.value) {
        // Got Left
        if (!currentNode.left) {
          currentNode.left = newNode
          return this;
        }

        currentNode = currentNode.left;
      } else {
        // Go Right
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }

        currentNode = currentNode.right;
      }
    }
  }

  lookup(value) {
    if (this.isEmpty()) {
      return false;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }

    return false;
  }

  remove(value) {
    if (this.isEmpty()) {
      return false;
    }

    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        /* We have a match, get to work */

        /* Option 1: No right child */
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            /** 
             * If parent > current value, make current 
             * left child a child of parent
             * **/
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;


              /** 
              * If parent < current value, make left  
              * child a right child of parent
              * **/
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          /* Option 2: Right child which doesn't have a left child */
        } else if (currentNode.right.left === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;

            /** 
            * If parent > current, make right child
            * of the left the parent
            * **/
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              /**
              * If parent < current, make right child
              * a right child of the parent
              * **/
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          /* Option 3: Right child that has a left child */
        } else {
          /* Find the right child's left most child */
          let leftMostChild = currentNode.right.left;
          let leftMostParent = currentNode.right;
          while (leftMostChild.left !== null) {
            leftMostParent = leftMostChild;
            leftMostChild = leftMostChild.left;
          }

          /* Parent's left subtree is now leftmost's right subtree */
          leftMostParent.left = leftMostChild.right;
          leftMostChild.left = currentNode.left;
          leftMostChild.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftMostChild;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftMostChild;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftMostChild;
            }
          }
        }

        return true;
      }
    }
  }

  isEmpty() {
    return this.root === null;
  }
}

const tree = new BinarySearchTree();

tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

console.log(tree.lookup(20))

// console.log(JSON.stringify(tree.root));


//          9
//      4       20
//    1   6  15    170


function traverse(node) {
  const tree = { value: node.value }
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
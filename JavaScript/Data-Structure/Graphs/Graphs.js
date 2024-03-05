/* Three ways of creating graphs */

/* 1: Edge List */
const graph = [[0, 2], [2, 3], [2, 1], [1, 3]];

/** 
 *  2: Adjacent List.
 *  Note: The index is the Node, and the values, is the Node's neighbors.
 *  In other words, the index of the array is the value of the actual Graph Node
 * */

//index          0      1         2       3
const graph2 = [[2], [2, 3], [0, 1, 3], [2, 1]]


/* 3: Adjacent Matrix */
const graph3 = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
]

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }

  addEdges(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }

  showConnection() {
    const allNodes = Object.keys(this.adjacentList);

    for (let node of allNodes) {
      const nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;

      for (vertex of nodeConnections) {
        connections += vertex + " "
      }

      console.log(node + "-->" + connections);
    }
  }
}

const myGraph = new Graph();

myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");

myGraph.addEdges("3", "1");
myGraph.addEdges("3", "4");
myGraph.addEdges("4", "2");
myGraph.addEdges("4", "5");
myGraph.addEdges("1", "2");
myGraph.addEdges("1", "0");
myGraph.addEdges("0", "2");
myGraph.addEdges("6", "5");

myGraph.showConnection();
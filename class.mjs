// constructor classes

class Node {
    constructor(value = null, nextNode = null) {
      this.value = value;
      this.nextNode = nextNode;
    }
  }

export class LinkedList {
    constructor() {
      this.header = null;
    }
    append(value) {
      if (this.header === null) {
        this.header = new Node(value);
      } else {
        let nodeChecker = this.header;
        while (nodeChecker.nextNode !== null) {
          nodeChecker = nodeChecker.nextNode;
        }
        nodeChecker.nextNode = new Node(value);
      }
    }
  
    prepend(value) {
      if (this.header === null) {
        this.header = new Node(value);
      } else {
        let tmp = new Node(value);
        tmp.nextNode = this.header;
        this.header = tmp;
      }
    }
    size() {
      let nodeLoop = this.header;
      let nodeCounter = 0;
      while (nodeLoop !== null) {
        nodeCounter++;
        nodeLoop = nodeLoop.nextNode;
      }
      return nodeCounter;
    }
    head() {
      return this.header.value;
    }
  
    tail() {
      let nodeLoop = this.header;
      while (nodeLoop.nextNode !== null) {
        nodeLoop = nodeLoop.nextNode;
      }
      return nodeLoop;
    }
  
    at(index) {
      let nodeLoop = this.header;
      let nodeCounter = 0;
      while (nodeLoop.nextNode !== null && nodeCounter !== index) {
        nodeCounter++;
        nodeLoop = nodeLoop.nextNode;
      }
      return nodeLoop;
    }
  
    pop() {
      let nodeLoop = this.header;
      let nodeCounter = 0;
      while (nodeLoop.nextNode !== null) {
        nodeCounter++;
        nodeLoop = nodeLoop.nextNode;
      }
      this.at(nodeCounter - 1).nextNode = null;
      return this;
    }
    contains(value) {
      let nodeLoop = this.header;
      while (nodeLoop.nextNode !== null) {
        if (nodeLoop.value === value) {
          return true;
        }
        nodeLoop = nodeLoop.nextNode;
      }
      return false;
    }
    find(value) {
      let nodeLoop = this.header;
      let nodeCounter = 0;
      while (nodeLoop.nextNode !== null) {
        if (nodeLoop.value === value) {
          return nodeCounter;
        }
        nodeCounter++;
        nodeLoop = nodeLoop.nextNode;
      }
      if (nodeLoop.value === value) {
        return nodeCounter;
      } else return null;
    }
    toString() {
      let nodeLoop = this.header;
      let nodeArray = [];
      while (nodeLoop.nextNode !== null) {
        nodeArray.push(nodeLoop.value);
        nodeLoop = nodeLoop.nextNode;
      }
      nodeArray.push(nodeLoop.value);
      if (nodeLoop.nextNode === null) {
        nodeArray.push("null");
      } else nodeArray.push(nodeLoop.nextNode);
      return "(" + nodeArray.join(") -> (") + ")";
    }
    insert(value, index) {
      if (this.size() !== 0 && this.size() >= index) {
        let tmp = new Node(value);
        tmp.nextNode = this.at(index);
        this.at(index - 1).nextNode = tmp;
      }
    }
    removeAt(index) {
      if (this.size() !== 0 && this.size() >= index){
          let tmp = this.at(index-1)
          tmp.nextNode = this.at(index+1);
      }
    }
  }
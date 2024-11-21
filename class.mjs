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
    if (this.header === null) return "empty list";
    else return this.header.value;
  }

  tail() {
    if (this.header === null) return "empty list";
    else {
      let nodeLoop = this.header;
      while (nodeLoop.nextNode !== null) {
        nodeLoop = nodeLoop.nextNode;
      }
      return nodeLoop;
    }
  }

  at(index) {
    if (this.header === null) return "empty list";
    else if (this.size() - 1 < index || index < 0) return "index out of bounds";
    let nodeLoop = this.header;
    let nodeCounter = 0;
    while (nodeLoop.nextNode !== null && nodeCounter !== index) {
      nodeCounter++;
      nodeLoop = nodeLoop.nextNode;
    }
    return nodeLoop;
  }

  pop() {
    if (this.header === null) return "empty list";
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
    if (this.header === null) return false;
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
    if (this.header === null) return null;
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
    if (this.header === null) return "empty list";

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
    if (index > (this.size()) || index < 0) return console.log("index out of bounds")
    else if (index === 0) return this.prepend(value)
    else if (index === this.size()) return this.append(value)
    else {
      let tmp = new Node(value);
      tmp.nextNode = this.at(index);
      this.at(index - 1).nextNode = tmp;
    }
  }
  removeAt(index) {
    if (index >= (this.size()) || index < 0) return console.log("index out of bounds")
    else if (index === this.size()-1) return this.pop()
    else if (index === 0) {
      this.header = this.header.nextNode
  }
    else {
      let tmp = this.at(index - 1);
      tmp.nextNode = this.at(index + 1);
    }
  }
}

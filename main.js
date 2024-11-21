class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.header = null;
  }
  append(value) {
    if (this.header === null) {
      this.header = new Node(value);
    } else {
        let nodeChecker = this.header; 
        while (nodeChecker.nextNode !== null){
            nodeChecker = nodeChecker.nextNode;
        }
        nodeChecker.nextNode = new Node(value);
    }
  }

  prepend(value){
    if (this.header === null) {
        this.header = new Node(value);
      } else {
        let tmp = new Node(value)
        tmp.nextNode = this.header
        this.header = tmp
      }
  }
  size(){
    let nodeLoop = this.header
    let nodeCounter = 0;
    while (nodeLoop.nextNode !== null){
        nodeCounter++;
        nodeLoop = nodeLoop.nextNode;
    }
    return nodeCounter;
  }
  head(){
    return "value: " + this.header.value + " NextNode: " + this.header.nextNode.value
  }
}

const list = new LinkedList();

list.prepend("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("armadillo")

console.log(list.head());

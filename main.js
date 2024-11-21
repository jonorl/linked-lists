class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
        let nodeChecker = this.head; 
        while (nodeChecker.nextNode !== null){
            nodeChecker = nodeChecker.nextNode;
        }
        nodeChecker.nextNode = new Node(value);
    }
  }

  prepend(value){
    if (this.head === null) {
        this.head = new Node(value);
      } else {
        let tmp = new Node(value)
        tmp.nextNode = this.head
        this.head = tmp
      }
  }
}

const list = new LinkedList();

list.prepend("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("yo")

console.log(list);

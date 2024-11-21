// import modules

import {LinkedList} from "./class.mjs"

// testing parameters

const list = new LinkedList();

list.prepend("dog"); // works
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle"); // works
list.prepend("armadillo");
list.insert("yo", 4); // works
list.removeAt(4); // works

// output
console.log(list.size()); // works
console.log(list.toString()); // works
console.log(list.find("car")) // works
console.log(list.find("snake")) // works
console.log(list.tail()) // works
console.log(list.head()) // works
console.log(list.pop().toString()) // works
console.log(list.contains("parrot")) // works
console.log(list.contains("car")) // works
console.log(list.at(1)) // works

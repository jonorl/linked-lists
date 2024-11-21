// import modules

import {LinkedList} from "./class.mjs"

const list = new LinkedList();

list.prepend("dog"); // works
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle"); // works
list.prepend("armadillo");
list.insert("yo", 3); // works
list.removeAt(1); // works


console.log(list.size()); // works
console.log(list.toString()); // works
console.log(list.find("car")) // works
console.log(list.find("cat")) // works
console.log(list.tail()) // works
console.log(list.head()) // works
console.log(list.pop().toString()) // works
console.log(list.contains("parrot")) // works
console.log(list.contains("car")) // works
console.log(list.at(2).value) // works

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let a = new Node("A");
let b = new Node("B");
let c = new Node("C");
let d = new Node("D");
console.log(a);

a.next = b;
b.next = c;
c.next = d;

// traversal algorithm

const printLinkedList = (head) +> {
  let current = head;
  while (current !== null){

  }
}

printLinkedList(a);
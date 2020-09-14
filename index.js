/*
Title: Linked List Data Structure
Channel: Traversy Media
URL: https://www.youtube.com/watch?v=ZBdE8DElQQU
*/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    //if empty, make head //i.e. if this.head === null
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  //insert at index
  instertAt(data, index) {
    //if index is out of range, do nothing
    if (index > 0 && index > this.size) {
      return;
    }
    //if index = 0, set new node to head
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    //otherwise insert at correct index
    //declare new node
    const node = new Node(data);
    let current;
    let previous;

    //set current to first
    current = this.head;
    let count = 0;

    //iterate
    while (count < index) {
      previous = current; //node before index
      count++;
      current = current.next; //node after index
    }

    //insert new node
    node.next = current; //set new node.next
    previous.next = node; //set previous node.next
  }

  //get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }

    return null;
  }

  //remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    //remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next; //set previous.next to current.next, unlinking current from the list
    }
  }

  //clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  //print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);

// ll.printListData();
// ll.removeAt(2);
ll.clearList();
ll.printListData();
// console.log(ll);
// ll.getAt(2);

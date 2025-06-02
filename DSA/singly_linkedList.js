class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null; // first node
  }

  // Insert at the end
  append(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Insert at the beginning
  prepend(value) {
    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Search for a value
  search(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // Delete a node by value
  delete(value) {
    if (!this.head) return;

    // If head needs to be deleted
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  // Reverse the linked list
  reverse() {
    let prev = null;
    let current = this.head;
    let nextNode = null;

    while (current) {
      nextNode = current.next; // store next
      current.next = prev;     // reverse pointer
      prev = current;          // move prev to current
      current = nextNode;      // move to next
    }

    this.head = prev; // update head to new first node
  }

  // Print the list
  printList() {
    let current = this.head;
    let output = '';
    while (current) {
      output += current.value + ' -> ';
      current = current.next;
    }
    output += 'null';
    console.log(output);
  }
}
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);

list.prepend(5);

list.reverse(); // true

list.printList(); // Output: 5 -> 10 -> 20 -> 30 -> null
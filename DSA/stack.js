class Stack {
  constructor() {
    this.items = {};
    this.top = 0;
  }

  // Add an item to the top
  push(element) {
    this.items[this.top] = element;
    this.top++;
  }

  // Remove and return the top item
  pop() {
    if (this.isEmpty()) return null;
    this.top--;
    let item = this.items[this.top];
    delete this.items[this.top];
    return item;
  }

  // View the top item
  peek() {
    if (this.isEmpty())   return null;
    return this.items[this.top - 1];
  }

  // Check if stack is empty
  isEmpty() {
    return this.top === 0;
  }

  // Get the size of the stack
  size() {
    return this.top;
  }

  // Display stack
  print() {
    let result = "";
    for (let i = 0; i < this.top; i++) {
      result += this.items[i] + " ";
    }
    console.log(result.trim());
  }
}

// Usage
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); // 10 20 30
console.log(stack.pop()); // 30
stack.print(); // 10 20
console.log(stack.peek()); // 20
console.log(stack.isEmpty()); // false
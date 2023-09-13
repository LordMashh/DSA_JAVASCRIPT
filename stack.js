class Stack {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the top of the stack
    push(element) {
      this.items.push(element);
    }
  
    // Remove and return the top element from the stack
    pop() {
      if (this.isEmpty()) {
        return "Underflow"; // Stack is empty
      }
      return this.items.pop();
    }
  
    // Return the top element without removing it
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the stack
    size() {
      return this.items.length;
    }
  }
  
  // Example usage of Stack:
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log("Top of Stack:", stack.peek()); // 3
  console.log("Stack Size:", stack.size()); // 3
  console.log("Pop:", stack.pop()); // 3
  console.log("Stack is Empty:", stack.isEmpty()); // false
  
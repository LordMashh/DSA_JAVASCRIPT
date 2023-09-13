class Queue {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the back of the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remove and return the front element from the queue
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow"; // Queue is empty
      }
      return this.items.shift();
    }
  
    // Return the front element without removing it
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the queue
    size() {
      return this.items.length;
    }
  }
  
  // Example usage of Queue:
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log("Front of Queue:", queue.front()); // 1
  console.log("Queue Size:", queue.size()); // 3
  console.log("Dequeue:", queue.dequeue()); // 1
  console.log("Queue is Empty:", queue.isEmpty()); // false
  
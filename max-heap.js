class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    // Aspect 1: Insertion
    insert(value) {
      this.heap.push(value);
      this.bubbleUp();
    }
  
    bubbleUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[parentIndex] >= this.heap[index]) {
          break; // Heap property is satisfied
        }
        // Swap the parent and child
        [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
        index = parentIndex;
      }
    }
  
    // Aspect 2: Deletion (Removing the Maximum Element)
    extractMax() {
      if (this.isEmpty()) {
        return null; // Heap is empty
      }
  
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
  
      const max = this.heap[0];
      // Replace the root with the last element
      this.heap[0] = this.heap.pop();
      this.heapify(0);
      return max;
    }
  
    heapify(index) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let largestIndex = index;
  
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largestIndex]) {
        largestIndex = leftChildIndex;
      }
  
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largestIndex]) {
        largestIndex = rightChildIndex;
      }
  
      if (largestIndex !== index) {
        // Swap the parent and largest child
        [this.heap[index], this.heap[largestIndex]] = [this.heap[largestIndex], this.heap[index]];
        this.heapify(largestIndex);
      }
    }
  
    // Aspect 3: Checking for Emptiness
    isEmpty() {
      return this.heap.length === 0;
    }
  
    // Aspect 4: Accessing the Maximum Element
    peek() {
      return this.isEmpty() ? null : this.heap[0];
    }
  }
  
  // Example usage of MaxHeap:
  const maxHeap = new MaxHeap();
  maxHeap.insert(5);
  maxHeap.insert(10);
  maxHeap.insert(3);
  maxHeap.insert(1);
  console.log("Maximum Element:", maxHeap.peek()); // 10
  console.log("Extracted Max:", maxHeap.extractMax()); // 10
  console.log("Maximum Element:", maxHeap.peek()); // 5
  
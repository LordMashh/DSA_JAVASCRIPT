class MinHeap {
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
        if (this.heap[parentIndex] <= this.heap[index]) {
          break; // Heap property is satisfied
        }
        // Swap the parent and child
        [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
        index = parentIndex;
      }
    }
  
    // Aspect 2: Deletion (Removing the Minimum Element)
    extractMin() {
      if (this.isEmpty()) {
        return null; // Heap is empty
      }
  
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
  
      const min = this.heap[0];
      // Replace the root with the last element
      this.heap[0] = this.heap.pop();
      this.heapify(0);
      return min;
    }
  
    heapify(index) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallestIndex = index;
  
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
        smallestIndex = leftChildIndex;
      }
  
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
        smallestIndex = rightChildIndex;
      }
  
      if (smallestIndex !== index) {
        // Swap the parent and smallest child
        [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
        this.heapify(smallestIndex);
      }
    }
  
    // Aspect 3: Checking for Emptiness
    isEmpty() {
      return this.heap.length === 0;
    }
  
    // Aspect 4: Accessing the Minimum Element
    peek() {
      return this.isEmpty() ? null : this.heap[0];
    }
  }
  
  // Example usage of MinHeap:
  const minHeap = new MinHeap();
  minHeap.insert(5);
  minHeap.insert(10);
  minHeap.insert(3);
  minHeap.insert(1);
  console.log("Minimum Element:", minHeap.peek()); // 1
  console.log("Extracted Min:", minHeap.extractMin()); // 1
  console.log("Minimum Element:", minHeap.peek()); // 3
  
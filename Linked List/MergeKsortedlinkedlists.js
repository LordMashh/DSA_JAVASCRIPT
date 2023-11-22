// Merge K sorted linked lists using javascript

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(node) {
        this.heap.push(node);
        this.heapifyUp();
    }

    pop() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();

        return root;
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;

        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);

            if (this.heap[currentIndex].val < this.heap[parentIndex].val) {
                [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    heapifyDown() {
        let currentIndex = 0;

        while (true) {
            const leftChildIndex = 2 * currentIndex + 1;
            const rightChildIndex = 2 * currentIndex + 2;
            let smallestChildIndex = currentIndex;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].val < this.heap[smallestChildIndex].val) {
                smallestChildIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].val < this.heap[smallestChildIndex].val) {
                smallestChildIndex = rightChildIndex;
            }

            if (smallestChildIndex !== currentIndex) {
                [this.heap[currentIndex], this.heap[smallestChildIndex]] = [this.heap[smallestChildIndex], this.heap[currentIndex]];
                currentIndex = smallestChildIndex;
            } else {
                break;
            }
        }
    }
}

function mergeKLists(lists) {
    const minHeap = new MinHeap();

    // Insert the heads of all linked lists into the min-heap
    lists.forEach((list) => {
        if (list) {
            minHeap.insert(list);
        }
    });

    const dummyHead = new ListNode(0);
    let current = dummyHead;

    // Continue until the min-heap is not empty
    while (minHeap.heap.length > 0) {
        const smallest = minHeap.pop();
        current.next = smallest;
        current = current.next;

        // Move to the next node in the linked list
        if (smallest.next) {
            minHeap.insert(smallest.next);
        }
    }

    return dummyHead.next;
}

// Example usage:
const list1 = new ListNode(1);
list1.next = new ListNode(4);
list1.next.next = new ListNode(5);

const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

const list3 = new ListNode(2);
list3.next = new ListNode(6);

const mergedList = mergeKLists([list1, list2, list3]);

// Helper function to print the merged list
function printList(head) {
    while (head) {
        console.log(head.val);
        head = head.next;
    }
}

// Print the merged list
printList(mergedList);



// class Node {
//     constructor(val, next) {
//       this.val = val;
//       this.next = next;
//     }
//   }
  
//   function mergeTwoLists(list1, list2) {
//     let head = new Node(null);
//     let current = head;
  
//     while (list1 && list2) {
//         if (list1.val <= list2.val) {
//             current.next = list1;
//             list1 = list1.next;
//           } else {
//             current.next = list2;
//             list2 = list2.next;
//           }
          
//           current = current.next;
//           }
          
//           if (list1) {
//             current.next = list1;
//           } else if (list2) {
//             current.next = list2;
//           }
          
//           return head.next;
//           }
          
//           function mergeKLists(lists) {
//             if (lists.length === 0) {
//               return null;
//             }
          
//             if (lists.length === 1) {
//               return lists[0];
//             }
          
//             const middleIndex = Math.floor(lists.length / 2);
//             const left = mergeKLists(lists.slice(0, middleIndex));
//             const right = mergeKLists(lists.slice(middleIndex));
          
//             return mergeTwoLists(left, right);
//           }
          
  
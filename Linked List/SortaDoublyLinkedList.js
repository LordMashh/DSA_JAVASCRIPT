// Sort a Doubly Linked List using Merge Sort in javascript

class ListNode {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

function mergeSortDoublyLinkedList(head) {
    if (head === null || head.next === null) {
        return head;
    }

    const [left, right] = splitList(head);

    return merge(mergeSortDoublyLinkedList(left), mergeSortDoublyLinkedList(right));
}

function splitList(head) {
    let slow = head;
    let fast = head.next;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    const left = head;
    const right = slow.next;
    slow.next = null;

    return [left, right];
}

function merge(left, right) {
    const dummyHead = new ListNode(0);
    let current = dummyHead;

    while (left !== null && right !== null) {
        if (left.val < right.val) {
            current.next = left;
            left.prev = current;
            left = left.next;
        } else {
            current.next = right;
            right.prev = current;
            right = right.next;
        }
        current = current.next;
    }

    if (left !== null) {
        current.next = left;
        left.prev = current;
    }

    if (right !== null) {
        current.next = right;
        right.prev = current;
    }

    return dummyHead.next;
}

// Example usage:
const list = new ListNode(4);
list.next = new ListNode(2);
list.next.prev = list;
list.next.next = new ListNode(1);
list.next.next.prev = list.next;
list.next.next.next = new ListNode(3);
list.next.next.next.prev = list.next.next;

const sortedList = mergeSortDoublyLinkedList(list);

// Helper function to print the sorted list
function printList(head) {
    while (head !== null) {
        console.log(head.val);
        head = head.next;
    }
}

// Print the sorted list
printList(sortedList);

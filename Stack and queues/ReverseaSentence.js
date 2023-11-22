// Reverse a Sentence  using stacks and queue in javascript

class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

function reverseSentence(sentence) {
    const words = sentence.split(' ');
    const wordQueue = new Queue();
    const wordStack = new Stack();

    // Enqueue words into the queue
    words.forEach(word => {
        wordQueue.enqueue(word);
    });

    // Dequeue words from the queue and push them onto the stack
    while (!wordQueue.isEmpty()) {
        const word = wordQueue.dequeue();
        wordStack.push(word);
    }

    // Pop words from the stack to reverse the order
    let reversedSentence = '';
    while (!wordStack.isEmpty()) {
        const word = wordStack.pop();
        reversedSentence += word + ' ';
    }

    // Remove the trailing space
    reversedSentence = reversedSentence.trim();

    return reversedSentence;
}

// Example usage:
const sentence = "Hello , this is a sample sentence.";

const reversedSentence = reverseSentence(sentence);
console.log("Original Sentence:", sentence);
console.log("Reversed Sentence:", reversedSentence);

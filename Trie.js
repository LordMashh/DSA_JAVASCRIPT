class TrieNode {
    constructor() {
      this.children = new Map();
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    // Aspect 1: Insertion
    insert(word) {
      let currentNode = this.root;
      for (const char of word) {
        if (!currentNode.children.has(char)) {
          currentNode.children.set(char, new TrieNode());
        }
        currentNode = currentNode.children.get(char);
      }
      currentNode.isEndOfWord = true;
    }
  
    // Aspect 2: Search
    search(word) {
      let currentNode = this.root;
      for (const char of word) {
        if (!currentNode.children.has(char)) {
          return false;
        }
        currentNode = currentNode.children.get(char);
      }
      return currentNode.isEndOfWord;
    }
  
    // Aspect 3: List All Words
    listWords() {
      const words = [];
      const buildWord = (node, currentWord) => {
        if (node.isEndOfWord) {
          words.push(currentWord);
        }
        for (const [char, childNode] of node.children) {
          buildWord(childNode, currentWord + char);
        }
      };
      buildWord(this.root, '');
      return words;
    }
  }
  
  // Example usage of Trie:
  const trie = new Trie();
  trie.insert("apple");
  trie.insert("app");
  trie.insert("banana");
  
  console.log("Search 'apple':", trie.search("apple")); // true
  console.log("Search 'app':", trie.search("app")); // true
  console.log("Search 'apples':", trie.search("apples")); // false
  console.log("List All Words:", trie.listWords()); // ['apple', 'app', 'banana']
  
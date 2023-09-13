class TreeNode {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    // Insertion
    insert(data) {
      const newNode = new TreeNode(data);
      if (!this.root) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (!node.left) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    // Searching
    search(data, node = this.root) {
      if (!node) {
        return false;
      }
      if (data === node.data) {
        return true;
      }
      if (data < node.data) {
        return this.search(data, node.left);
      }
      return this.search(data, node.right);
    }
  
    // Depth-First Traversal: In-Order, Pre-Order, Post-Order
    inOrder(node = this.root) {
      if (node) {
        this.inOrder(node.left);
        console.log(node.data);
        this.inOrder(node.right);
      }
    }
  
    preOrder(node = this.root) {
      if (node) {
        console.log(node.data);
        this.preOrder(node.left);
        this.preOrder(node.right);
      }
    }
  
    postOrder(node = this.root) {
      if (node) {
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.data);
      }
    }
  }
  
  // Example usage of Binary Search Tree:
  const binarySearchTree = new BinarySearchTree();
  binarySearchTree.insert(4);
  binarySearchTree.insert(2);
  binarySearchTree.insert(6);
  binarySearchTree.insert(1);
  binarySearchTree.insert(3);
  binarySearchTree.insert(5);
  binarySearchTree.insert(7);
  console.log("In-Order Traversal:");
  binarySearchTree.inOrder(); // 1, 2, 3, 4, 5, 6, 7
  console.log("Search for 3:", binarySearchTree.search(3)); // true
  console.log("Search for 8:", binarySearchTree.search(8)); // false
  
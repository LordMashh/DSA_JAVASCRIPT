class TreeNode {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
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
      if (!node.left) {
        node.left = newNode;
      } else if (!node.right) {
        node.right = newNode;
      } else {
        // If both left and right are occupied, recursively insert to the left
        this.insertNode(node.left, newNode);
      }
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
  
  // Example usage of Binary Tree:
  const binaryTree = new BinaryTree();
  binaryTree.insert(4);
  binaryTree.insert(2);
  binaryTree.insert(6);
  binaryTree.insert(1);
  binaryTree.insert(3);
  binaryTree.insert(5);
  binaryTree.insert(7);
  console.log("In-Order Traversal:");
  binaryTree.inOrder(); // 1, 2, 3, 4, 5, 6, 7
  console.log("postOrder Traversal:");
  binaryTree.postOrder(); // 1, 2, 3, 4, 5, 6, 7
  console.log("preOrder Traversal:");
  binaryTree.preOrder(); // 1, 2, 3, 4, 5, 6, 7
  
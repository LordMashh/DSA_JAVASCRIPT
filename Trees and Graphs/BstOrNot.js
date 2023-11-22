// Determine if given Binary Tree is a BST or not in javascript

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function isBST(root) {
    // Initialize previous node value to negative infinity
    let prevValue = -Infinity;

    // Helper function for in-order traversal
    function inOrderTraversal(node) {
        if (node === null) {
            return true;
        }

        // Recursively check the left subtree
        if (!inOrderTraversal(node.left)) {
            return false;
        }

        // Check the current node value
        if (node.value <= prevValue) {
            return false;
        }

        // Update the previous value
        prevValue = node.value;

        // Recursively check the right subtree
        return inOrderTraversal(node.right);
    }

    // Start in-order traversal from the root
    return inOrderTraversal(root);
}

// Example usage:
// Create a sample binary tree
const root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);
// root.left = new TreeNode(4);
// Check if the tree is a BST
console.log("Is the tree a BST?", isBST(root)); // Output: true

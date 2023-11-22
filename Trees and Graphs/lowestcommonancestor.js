// Find Lowest Common Ancestor (LCA) of two nodes in a binary tree in javascript

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findLCA(root, node1, node2) {
    if (!root) {
        return null;
    }

    // If either node1 or node2 is the root, the root is the LCA
    if (root === node1 || root === node2) {
        return root;
    }

    // Recursively find LCA in the left and right subtrees
    const leftLCA = findLCA(root.left, node1, node2);
    const rightLCA = findLCA(root.right, node1, node2);

    // If both left and right subtrees have an LCA, then the root is the LCA
    if (leftLCA && rightLCA) {
        return root;
    }

    // If only one subtree has an LCA, that subtree's LCA is the overall LCA
    return leftLCA || rightLCA;
}

// Example usage:
// Create a binary tree
const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

// Nodes to find LCA for
const node1 = root.left.left; // Node with value 5
const node2 = root.left.right.right; // Node with value 8

// Find and print the LCA
const lca = findLCA(root, node1, node2);
console.log("Lowest Common Ancestor:", lca ? lca.value : "No common ancestor found");

// Check if two given binary trees are identical or not in javascript

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function areIdenticalTrees(root1, root2) {
    if (!root1 && !root2) {
        // Both trees are empty, considered identical
        return true;
    }

    if (root1 && root2) {
        // Compare current nodes and recursively check left and right subtrees
        return (
            root1.value === root2.value &&
            areIdenticalTrees(root1.left, root2.left) &&
            areIdenticalTrees(root1.right, root2.right)
        );
    }

    // One tree is empty while the other is not, considered not identical
    return false;
}

// Example usage:
// Create two identical binary trees
const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

// Check if the trees are identical
console.log("Are the trees identical?", areIdenticalTrees(tree1, tree2)); // Output: true

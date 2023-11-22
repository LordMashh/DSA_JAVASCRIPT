// Print left view of a binary tree in javascript

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function printLeftView(root) {
    if (!root) {
        return;
    }

    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();

            // Print the leftmost node at each level
            if (i === 0) {
                console.log(currentNode.value);
            }

            // Enqueue the left and right children of the current node
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
    }
}

// Example usage:
// Create a sample binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Print the left view of the binary tree
console.log("Left View of the Binary Tree:");
printLeftView(root);


// // print full tree 
// class TreeNode {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// function printTree(root, space = 0) {
//     if (root !== null) {
//         // In-order traversal: print right subtree, current node, left subtree
//         printTree(root.right, space + 4);
//         console.log(" ".repeat(space) + root.value);
//         printTree(root.left, space + 4);
//     }
// }

// // Example usage:
// // Create a sample binary tree
// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);
// root.right.left = new TreeNode(6);
// root.right.right = new TreeNode(7);

// // Print the entire binary tree
// console.log("Binary Tree:");
// printTree(root);

// Construct a Binary Tree from Ancestor Matrix in JavaScript.

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function constructBinaryTree(ancestorMatrix) {
    const n = ancestorMatrix.length;
    const rootCandidates = new Array(n).fill(true);

    // Create an array to represent the binary tree nodes
    const nodes = new Array(n).fill(null).map((_, i) => new TreeNode(i));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (ancestorMatrix[i][j]) {
                nodes[i].left = nodes[j];
                rootCandidates[j] = false; // j is not a root candidate
            }
        }
    }

    let root = null;

    // Find the root candidate
    for (let i = 0; i < n; i++) {
        if (rootCandidates[i]) {
            root = nodes[i];
            break;
        }
    }

    return root;
}

// Example usage:
const ancestorMatrix = [
    [0, 0, 0, 0, 0],
    [1, 0, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
];

const root = constructBinaryTree(ancestorMatrix);

console.log("Constructed Binary Tree:");
console.log(root);

// write program Number of Islands using stacks and queue in javascript

// Using DFS with a stack
// function numIslandsDFS(grid) {
//     if (!grid || grid.length === 0) {
//         return 0;
//     }

//     const numRows = grid.length;
//     const numCols = grid[0].length;
//     let numIslands = 0;

//     function dfs(row, col) {
//         if (row < 0 || col < 0 || row >= numRows || col >= numCols || grid[row][col] === '0') {
//             return;
//         }

//         grid[row][col] = '0'; // Mark the current cell as visited

//         // Explore the neighboring cells in a DFS manner
//         dfs(row + 1, col);
//         dfs(row - 1, col);
//         dfs(row, col + 1);
//         dfs(row, col - 1);
//     }

//     for (let i = 0; i < numRows; i++) {
//         for (let j = 0; j < numCols; j++) {
//             if (grid[i][j] === '1') {
//                 numIslands++;
//                 dfs(i, j);
//             }
//         }
//     }

//     return numIslands;
// }

// Using BFS with a queue
function numIslandsBFS(grid) {
    if (!grid || grid.length === 0) {
        return 0;
    }

    const numRows = grid.length;
    const numCols = grid[0].length;
    let numIslands = 0;

    function bfs(row, col) {
        const queue = [[row, col]];
        while (queue.length > 0) {
            const [currentRow, currentCol] = queue.shift();

            if (
                currentRow < 0 ||
                currentCol < 0 ||
                currentRow >= numRows ||
                currentCol >= numCols ||
                grid[currentRow][currentCol] === '0'
            ) {
                continue;
            }

            grid[currentRow][currentCol] = '0'; // Mark the current cell as visited

            // Enqueue neighboring cells in a BFS manner
            queue.push([currentRow + 1, currentCol]);
            queue.push([currentRow - 1, currentCol]);
            queue.push([currentRow, currentCol + 1]);
            queue.push([currentRow, currentCol - 1]);
        }
    }

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (grid[i][j] === '1') {
                numIslands++;
                bfs(i, j);
            }
        }
    }

    return numIslands;
}

// Example usage:
const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
];

// console.log('Number of Islands (DFS):', numIslandsDFS(grid)); // Output: 3
console.log('Number of Islands (BFS):', numIslandsBFS(grid)); // Output: 3

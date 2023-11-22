// Find the Shortest Cell Path using stacks and queue in javascript

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

function shortestCellPath(grid, source, destination) {
    const numRows = grid.length;
    const numCols = grid[0].length;
    const visited = Array.from({ length: numRows }, () => Array(numCols).fill(false));
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // Up, Down, Left, Right

    const isValidCell = (row, col) => row >= 0 && row < numRows && col >= 0 && col < numCols && grid[row][col] === 1;

    const queue = new Queue();
    queue.enqueue({ row: source[0], col: source[1], distance: 0 });

    while (!queue.isEmpty()) {
        const { row, col, distance } = queue.dequeue();

        if (row === destination[0] && col === destination[1]) {
            return distance;
        }

        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            if (isValidCell(newRow, newCol) && !visited[newRow][newCol]) {
                visited[newRow][newCol] = true;
                queue.enqueue({ row: newRow, col: newCol, distance: distance + 1 });
            }
        }
    }

    // If no valid path found
    return -1;
}

// Example usage:
const grid = [
    [1, 0, 1, 1],
    [1, 1, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 1, 1],
];

const source = [0, 0];
const destination = [0, 3];

const distance = shortestCellPath(grid, source, destination);
console.log("Shortest Cell Path Distance:", distance); // Output: 4

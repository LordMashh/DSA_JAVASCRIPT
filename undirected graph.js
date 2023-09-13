class Graph {
    constructor() {
      this.vertices = new Map(); // Map to store vertices and their adjacent vertices
    }
  
    // Aspect 1: Adding Vertices
    addVertex(vertex) {
      if (!this.vertices.has(vertex)) {
        this.vertices.set(vertex, []);
      }
    }
  
    // Aspect 2: Adding Edges
    addEdge(vertex1, vertex2) {
      if (!this.vertices.has(vertex1) || !this.vertices.has(vertex2)) {
        console.log("Vertex not found");
        return;
      }
      this.vertices.get(vertex1).push(vertex2);
      this.vertices.get(vertex2).push(vertex1); // For an undirected graph
    }
  
    // Aspect 3: Depth-First Traversal
    dfs(startVertex, visited = new Set(), callback) {
      if (!this.vertices.has(startVertex)) {
        console.log("Start vertex not found");
        return;
      }
      visited.add(startVertex);
      if (callback) {
        callback(startVertex);
      }
      for (const neighbor of this.vertices.get(startVertex)) {
        if (!visited.has(neighbor)) {
          this.dfs(neighbor, visited, callback);
        }
      }
    }
  
    // Aspect 4: Breadth-First Traversal
    bfs(startVertex, callback) {
      if (!this.vertices.has(startVertex)) {
        console.log("Start vertex not found");
        return;
      }
      const visited = new Set();
      const queue = [startVertex];
      visited.add(startVertex);
  
      while (queue.length > 0) {
        const vertex = queue.shift();
        if (callback) {
          callback(vertex);
        }
        for (const neighbor of this.vertices.get(vertex)) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
    }
  
    // Aspect 5: Checking for Connectivity
    isConnected() {
      const startVertex = this.vertices.keys().next().value;
      if (!startVertex) {
        return true; // An empty graph is considered connected
      }
  
      const visited = new Set();
      this.dfs(startVertex, visited);
  
      return visited.size === this.vertices.size;
    }
  }
  
  // Example usage of Graph:
  const graph = new Graph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addEdge("A", "B");
  graph.addEdge("B", "C");
  graph.addVertex("D");
  graph.addEdge("A", "D");
  console.log("DFS:");
  graph.dfs("A", undefined, (vertex) => console.log(vertex)); // A, B, C, D
  console.log("BFS:");
  graph.bfs("A", (vertex) => console.log(vertex)); // A, B, D, C
  console.log("Is Connected:", graph.isConnected()); // true
  
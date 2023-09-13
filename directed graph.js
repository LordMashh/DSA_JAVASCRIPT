class DirectedGraph {
    constructor() {
      this.vertices = new Map(); // Map to store vertices and their outgoing edges
    }
  
    // Aspect 1: Adding Vertices
    addVertex(vertex) {
      if (!this.vertices.has(vertex)) {
        this.vertices.set(vertex, []);
      }
    }
  
    // Aspect 2: Adding Directed Edges
    addDirectedEdge(fromVertex, toVertex) {
      if (!this.vertices.has(fromVertex) || !this.vertices.has(toVertex)) {
        console.log("Vertex not found");
        return;
      }
      this.vertices.get(fromVertex).push(toVertex);
    }
  
    // Aspect 3: Depth-First Traversal (DFS)
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
  
    // Aspect 4: Breadth-First Traversal (BFS)
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
  
  // Example usage of DirectedGraph:
  const directedGraph = new DirectedGraph();
  directedGraph.addVertex("A");
  directedGraph.addVertex("B");
  directedGraph.addVertex("C");
  directedGraph.addDirectedEdge("A", "B");
  directedGraph.addDirectedEdge("B", "C");
  directedGraph.addDirectedEdge("C", "A"); // Create a cycle
  console.log("DFS:");
  directedGraph.dfs("A", undefined, (vertex) => console.log(vertex)); // A, B, C
  console.log("BFS:");
  directedGraph.bfs("A", (vertex) => console.log(vertex)); // A, B, C
  console.log("Is Connected:", directedGraph.isConnected()); // true
  
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class Queue {
  constructor() {
    this.items = {};
    this.tailIndex = 0;
    this.headIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    let temp = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return temp;
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let k = Number(input[0]);

let line = 1;

let answer = "";
while (k--) {
  let graph = [];
  let [v, e] = input[line].split(" ").map(Number);

  for (let i = 1; i <= v; i++) {
    graph[i] = [];
  }
  for (let i = 1; i <= e; i++) {
    let [u, v] = input[line + i].split(" ").map(Number);
    graph[u].push(v);
    graph[v].push(u);
  }

  let visited = new Array(v + 1).fill(0);

  for (let i = 1; i <= v; i++) {
    if (visited[i] === 0) {
      bfs(i, graph, visited);
    }
  }

  line += e + 1;

  let isBinary = true;
  for (let i = 1; i <= v; i++) {
    for (let j of graph[i]) {
      if (visited[i] === visited[j]) {
        isBinary = false;
        break;
      }
    }
    if (!isBinary) break;
  }

  if (isBinary) answer += "YES\n";
  else answer += "NO\n";
}

console.log(answer);

function bfs(x, graph, visited) {
  let queue = new Queue();
  queue.enqueue(x);
  visited[x] = 1;

  while (queue.getLength() !== 0) {
    let a = queue.dequeue();
    for (let y of graph[a]) {
      if (visited[y] === 0) {
        visited[y] = visited[a] * -1;
        queue.enqueue(y);
      }
    }
  }
}

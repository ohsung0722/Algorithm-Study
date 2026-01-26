const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B2606/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const m = Number(input[1]);

let graph = [];
for (let i = 1; i <= n; i++) {
  graph[i] = [];
}

for (let i = 2; i <= m + 1; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

let visited = new Array(n + 1).fill(false);

let count = 0;

function dfs(node) {
  visited[node] = true;
  count++;
  for (let i of graph[node]) {
    if (!visited[i]) dfs(i);
  }
}

dfs(1);

console.log(count - 1);

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B1240/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let graph = [];
for (let i = 1; i <= n; i++) {
  graph[i] = [];
}
for (let i = 1; i < n; i++) {
  let [x, y, dist] = input[i].split(" ").map(Number);
  graph[x].push([y, dist]);
  graph[y].push([x, dist]);
}

let visited = [];
let distance = [];

function dfs(x, dist) {
  if (visited[x]) return;
  visited[x] = true;
  distance[x] = dist;
  for (let [i, di] of graph[x]) {
    dfs(i, di + dist);
  }
}

for (let i = 0; i < m; i++) {
  let [x, y] = input[n + i].split(" ").map(Number);
  visited = new Array(n).fill(false);
  distance = new Array(n).fill(0);
  dfs(x, 0);
  console.log(distance[y]);
}

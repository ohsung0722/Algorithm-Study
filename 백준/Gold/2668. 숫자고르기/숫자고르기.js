const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let graph = [0];
for (let i = 1; i <= n; i++) {
  graph.push(Number(input[i]));
}

let visited = new Array(n + 1).fill(false);
let finished = new Array(n + 1).fill(false);
let result = [];

for (let i = 1; i <= n; i++) {
  if (!visited[i]) dfs(i, graph, visited, finished, result);
}

let answer = "";
answer += result.length + "\n";

result.sort((a, b) => a - b);
for (let i of result) {
  answer += i + "\n";
}

console.log(answer);

function dfs(x, graph, visited, finished, result) {
  visited[x] = true;
  let y = graph[x];
  if (!visited[y]) {
    dfs(y, graph, visited, finished, result);
  } else if (!finished[y]) {
    while (y != x) {
      result.push(y);
      y = graph[y];
    }
    result.push(x);
  }

  finished[x] = true;
}

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let chicken = [];
let house = [];
for (let i = 1; i <= n; i++) {
  let line = input[i].split(" ").map(Number);
  for (let j = 0; j < n; j++) {
    if (line[j] === 1) {
      house.push([i - 1, j]);
    }
    if (line[j] === 2) {
      chicken.push([i - 1, j]);
    }
  }
}

let visited = new Array(2500).fill(false);
let min = 1e9;
let selected = [];

function dfs(depth, start) {
  if (depth === m) {
    let result = [];
    for (let i of selected) {
      result.push(chicken[i]);
    }

    let sum = 0;
    for (let [hx, hy] of house) {
      let temp = 1e9;
      for (let [cx, cy] of result) {
        temp = Math.min(temp, Math.abs(hx - cx) + Math.abs(hy - cy));
      }

      sum += temp;
    }

    min = Math.min(min, sum);
    return;
  }

  for (let i = start; i < chicken.length; i++) {
    if (visited[i]) {
      continue;
    }
    selected.push(i);
    visited[i] = true;
    dfs(depth + 1, i + 1);
    visited[i] = false;
    selected.pop();
  }
}

dfs(0, 0);
console.log(min);

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B10971/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const city = [];
for (let i = 1; i < N + 1; i++) {
  city.push([0]);
  let array = input[i].split(" ").map(Number);
  for (let j = 0; j < N; j++) {
    city[i - 1].push(array[j]);
  }
}

let visited = new Array(11).fill(false);
let select = [];
let minValue = 10 * 1000000;

function dfs(depth) {
  if (depth === N - 1) {
    let total = 0;
    let startNode = 0;
    for (let i = 0; i < N - 1; i++) {
      let nextNode = select[i];
      let cost = city[startNode][nextNode + 1];
      if (cost === 0) return;
      total += cost;
      startNode = nextNode;
    }

    let cost = city[startNode][1];
    if (cost === 0) return;
    total += cost;
    minValue = Math.min(minValue, total);
  }
  for (let i = 1; i <= N - 1; i++) {
    if (visited[i]) {
      continue;
    }
    visited[i] = true;
    select.push(i);
    dfs(depth + 1);
    visited[i] = false;
    select.pop();
  }
}

dfs(0);
console.log(minValue);

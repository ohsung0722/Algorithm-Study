const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B10974/input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);

let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(i);
}
let visited = new Array(N).fill(false);
let select = [];

let answer = "";
function dfs(arr, depth) {
  if (depth === N) {
    let result = [];
    for (let i of select) {
      result.push(arr[i]);
    }
    for (let i of result) {
      answer += i + " ";
    }
    answer += "\n";
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) {
      continue;
    }

    visited[i] = true;
    select.push(i);
    dfs(arr, depth + 1);
    visited[i] = false;
    select.pop(i);
  }
}

dfs(arr, 0);
console.log(answer);

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let array = new Array();
for (let i = 1; i <= n; i++) {
  array.push(i);
}

let visited = new Array(n).fill(false);
let selected = [];

let answer = "";
function dfs(arr, depth) {
  if (depth === n) {
    let result = [];
    for (let i of selected) result.push(arr[i]);
    for (let i of result) answer += i + " ";
    answer += "\n";
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(array, 0);
console.log(answer);

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B15650/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const N = Number(input[0]);
const M = Number(input[1]);

let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(i);
}

let visited = new Array(N).fill(false);
let select = [];

let answer = "";

function dfs(arr, depth) {
  if (depth === M) {
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
    if (
      visited[i] ||
      (select.length - 1 >= 0 && arr[select[select.length - 1]] > arr[i])
    ) {
      continue;
    }

    visited[i] = true;
    select.push(i);
    dfs(arr, depth + 1);
    visited[i] = false;
    select.pop();
  }
}

dfs(arr, 0);
console.log(answer);

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B6603/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let array = [];
for (let i = 0; i < input.length - 1; i++) {
  array.push(input[i].split(" ").map(Number));
}

let answer = "";
let select = [];
let visited = new Array(12).fill(false);

for (let i = 0; i < array.length; i++) {
  dfs(array[i], 0, array[i][0]);
  select = [];
  visited = new Array(12).fill(false);
  answer += "\n";
}

function dfs(arr, depth, length) {
  if (depth === 6) {
    for (let i of select) {
      answer += arr[i + 1] + " ";
    }
    answer += "\n";
  }

  for (let i = 0; i < length; i++) {
    if (visited[i] || arr[i + 1] < arr[select[select.length - 1] + 1]) continue;
    visited[i] = true;
    select.push(i);
    dfs(arr, depth + 1, length);
    visited[i] = false;
    select.pop();
  }
}

console.log(answer);

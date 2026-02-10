const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let t = Number(input[0]);
for (let i = 0; i < t; i++) {
  let n = Number(input[2 * i + 1]);
  let student = [0, ...input[2 * i + 2].split(" ").map(Number)];

  let visited = new Array(n + 1).fill(false);
  let done = new Array(n + 1).fill(false);
  let result = [];

  for (let x = 1; x <= n; x++) {
    if (!visited[x]) dfs(x, student, visited, done, result);
  }

  console.log(n - result.length);
}

function dfs(x, student, visited, done, result) {
  visited[x] = true;
  let y = student[x];
  if (!visited[y]) {
    dfs(y, student, visited, done, result);
  } else if (!done[y]) {
    while (y != x) {
      result.push(y);
      y = student[y];
    }
    result.push(x);
  }

  done[x] = true;
}

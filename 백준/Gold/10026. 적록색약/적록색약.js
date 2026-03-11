const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let array = new Array();
for (let i = 1; i <= n; i++) {
  array.push(input[i].split(""));
}

let visited = Array.from({ length: n }, () => new Array(n).fill(false));

let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];

let count = 0;

function dfs(x, y) {
  if (!visited[x][y]) {
    visited[x][y] = true;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
      if (array[x][y] === array[nx][ny]) dfs(nx, ny);
    }

    return true;
  }
  return false;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j)) count++;
  }
}

visited = Array.from({ length: n }, () => new Array(n).fill(false));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (array[i][j] === "R") {
      array[i][j] = "G";
    }
  }
}

let dCount = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j)) dCount++;
  }
}

console.log(count + " " + dCount);

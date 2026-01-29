const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B4803/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let line = 0;
let graph = [];
let visited = [];
let treeCount = 1;

while (true) {
  let [n, m] = input[line].split(" ").map(Number);
  if (n === 0 && m === 0) {
    break;
  }
  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }
  for (let i = 1; i <= m; i++) {
    let [x, y] = input[line + i].split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }

  visited = new Array(n + 1).fill(false);
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      if (!isCycle(i, 0)) count++;
    }
  }

  let answer = `Case ${treeCount}: `;

  if (count === 0) {
    answer += "No trees.";
  } else if (count === 1) {
    answer += "There is one tree.";
  } else {
    answer += `A forest of ${count} trees.`;
  }

  console.log(answer);

  line = line + m + 1;
  treeCount++;
}

function isCycle(x, prev) {
  visited[x] = true;
  for (let y of graph[x]) {
    if (!visited[y]) {
      if (isCycle(y, x)) {
        return true;
      }
    } else if (y !== prev) {
      return true;
    }
  }
  return false;
}

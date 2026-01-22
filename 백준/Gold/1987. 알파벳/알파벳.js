const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B1987/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const rcArray = input[0].split(" ").map(Number);
const r = rcArray[0];
const c = rcArray[1];

const board = [];
for (let i = 1; i <= r; i++) {
  board.push(input[i].split(""));
}

let visited = new Set();
let moveX = [1, -1, 0, 0];
let moveY = [0, 0, 1, -1];
let maxCount = 0;

function dfs(x, y, depth) {
  maxCount = Math.max(maxCount, depth);
  for (let i = 0; i < 4; i++) {
    let mx = x + moveX[i];
    let my = y + moveY[i];

    if (mx < 0 || mx >= r || my < 0 || my >= c) continue;
    if (visited.has(board[mx][my])) continue;
    visited.add(board[mx][my]);
    dfs(mx, my, depth + 1);
    visited.delete(board[mx][my]);
  }
}

visited.add(board[0][0]);
dfs(0, 0, 1);
console.log(maxCount);

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B2961/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let flavor = [];
for (let i = 1; i < n + 1; i++) {
  let array = input[i].split(" ").map(Number);
  let temp = [];
  for (let j = 0; j < 2; j++) {
    temp.push(array[j]);
  }
  flavor.push(temp);
}

let minValue = 1000000000;
let visited = new Array(n).fill(false);
let select = [];

function dfs(depth, start) {
  if (depth >= 1) {
    let sour = 1;
    let sweat = 0;
    let calc = 0;
    for (let i of select) {
      sour *= flavor[i][0];
      sweat += flavor[i][1];
    }
    calc = Math.abs(sour - sweat);
    minValue = Math.min(calc, minValue);
  }

  for (let i = start; i < n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    select.push(i);
    dfs(depth + 1, i + 1);
    select.pop();
    visited[i] = false;
  }
}

dfs(0, 0);

console.log(minValue);

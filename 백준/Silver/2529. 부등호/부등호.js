const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B2529/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const k = Number(input[0]);
const arrow = input[1].split(" ");

const num = [];

const visited = new Array(10).fill(false);
const result = [];

function dfs(depth) {
  if (depth === k + 1) {
    for (let i = 0; i < k; i++) {
      if (arrow[i] === "<" && num[i] > num[i + 1]) return;
      if (arrow[i] === ">" && num[i] < num[i + 1]) return;
    }

    let temp = [];
    for (let i of num) {
      temp.push(i);
    }

    result.push(temp);
  }

  for (let i = 0; i < 10; i++) {
    if (visited[i]) continue;
    num.push(i);
    visited[i] = true;
    dfs(depth + 1);
    num.pop();
    visited[i] = false;
  }
}

dfs(0);

let answer = "";
for (let i of result[result.length - 1]) {
  answer += i;
}
answer += "\n";
for (let i of result[0]) {
  answer += i;
}
console.log(answer);

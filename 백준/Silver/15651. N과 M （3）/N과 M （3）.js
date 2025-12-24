const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B15651/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const N = Number(input[0]);
const M = Number(input[1]);

let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(i);
}

let select = [];
let answer = "";

function dfs(arr, depth) {
  if (select.length === M) {
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
    select.push(i);
    dfs(arr, depth + 1);
    select.pop();
  }
}

dfs(arr, 0);
console.log(answer);

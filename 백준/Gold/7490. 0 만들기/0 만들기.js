const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B7490/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let inputArr = [];
for (let i = 1; i < input.length; i++) {
  inputArr.push(Number(input[i]));
}

let n = 0;
let answer = "";
let arr = [];
for (let i of inputArr) {
  arr = [];
  n = i;
  for (let j = 1; j <= i; j++) {
    arr.push(j);
  }
  dfs([], 0);
  answer += "\n";
}

console.log(answer);

function dfs(result, depth) {
  if (depth === n - 1) {
    let str = "";
    for (let i = 0; i < n - 1; i++) {
      str += arr[i] + result[i];
    }
    str += arr[n - 1];
    let current = eval(str.split(" ").join(""));
    if (current === 0) {
      answer += str + "\n";
    }
    return;
  }

  for (let i of [" ", "+", "-"]) {
    result.push(i);
    dfs(result, depth + 1);
    result.pop();
  }
}

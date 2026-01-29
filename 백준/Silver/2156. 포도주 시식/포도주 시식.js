const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let n = input[0];

let d = new Array(10001).fill(0);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i]);
}
d[0] = arr[0];
d[1] = arr[0] + arr[1];
d[2] = Math.max(arr[0] + arr[1], arr[0] + arr[2], arr[1] + arr[2]);
for (let i = 3; i < n; i++) {
  d[i] = d[i - 1];
  d[i] = Math.max(d[i], arr[i] + d[i - 2]);
  d[i] = Math.max(d[i], arr[i] + arr[i - 1] + d[i - 3]);
}

console.log(d[n - 1]);

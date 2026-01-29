const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B1003/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let testcase = input[0];

let d = new Array(10000).fill(0);
d[0] = 0;
d[1] = 1;

for (let i = 2; i <= 40; i++) {
  d[i] = d[i - 1] + d[i - 2];
}

for (let i = 1; i <= testcase; i++) {
  let n = input[i];
  if (n === 0) console.log(1, 0);
  else console.log(d[n - 1], d[n]);
}

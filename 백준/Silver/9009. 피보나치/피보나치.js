const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B9009/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let t = input[0];
let fibo = [1, 2];
while (fibo[fibo.length - 1] <= 1000000000) {
  fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
}

for (let i = 1; i <= t; i++) {
  let n = input[i];
  let index = fibo.length - 1;
  let res = [];

  while (n > 0) {
    if (fibo[index] <= n) {
      n -= fibo[index];
      res.push(fibo[index]);
    }
    index--;
  }
  res.sort((a, b) => a - b);
  console.log(res.join(" "));
}

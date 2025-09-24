const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B19939/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let n = input[0];
let k = input[1];

let sum = 0;
for (let i = 1; i <= k; i++) {
  sum += i;
}

if (sum > n) {
  console.log(-1);
} else {
  n -= sum;
  if (n % k === 0) return console.log(k - 1);
  else return console.log(k);
}

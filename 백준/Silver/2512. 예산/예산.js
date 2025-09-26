const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B2512/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let budget = input[1].split(" ").map(Number);
let m = Number(input[2]);

let start = 1;
let end = budget.reduce((a, b) => Math.max(a, b));

let result = 0;
while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let total = 0;
  for (x of budget) {
    total += Math.min(mid, x);
  }

  if (total <= m) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);

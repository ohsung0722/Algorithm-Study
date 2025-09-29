const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B2805/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let tree = input[1].split(" ").map(Number);
let start = 1;
let end = tree.reduce((a, b) => Math.max(a, b));

let result = 0;
while (start <= end) {
  let total = 0;
  let mid = Math.floor((start + end) / 2);

  for (x of tree) {
    if (x >= mid) {
      total += x - mid;
    }
  }

  if (total >= m) {
    start = mid + 1;
    result = mid;
  } else {
    end = mid - 1;
  }
}

console.log(result);

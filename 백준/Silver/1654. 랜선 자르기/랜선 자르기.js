const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B1654/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [k, n] = input[0].split(" ").map(Number);
let lan = new Array();
for (let i = 1; i < k + 1; i++) {
  lan.push(Number(input[i]));
}

let start = 1;
let end = lan.reduce((a, b) => Math.max(a, b));

let result = 0;
while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let total = 0;
  for (x of lan) {
    total += Math.floor(x / mid);
  }

  if (total >= n) {
    start = mid + 1;
    result = mid;
  } else if (total < n) {
    end = mid - 1;
  }
}

console.log(result);

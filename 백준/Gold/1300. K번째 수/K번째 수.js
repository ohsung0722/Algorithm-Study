const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B1300/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const k = Number(input[1]);

let start = 1;
let end = N * N;

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;

  for (i = 1; i <= N; i++) {
    total += Math.min(parseInt(mid / i), N);
  }

  if (total >= k) {
    result = mid;
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(result);

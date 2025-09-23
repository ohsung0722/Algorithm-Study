const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B11509/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let H = input[1].split(" ").map(Number);
let array = new Array(1000001).fill(0);

let count = 0;
for (let i = 0; i < n; i++) {
  if (array[H[i]] > 0) {
    array[H[i]]--;
    array[H[i] - 1]++;
  } else {
    count++;
    array[H[i] - 1]++;
  }
}

console.log(count);

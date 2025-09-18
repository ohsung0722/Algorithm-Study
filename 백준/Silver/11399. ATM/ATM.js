const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B11399/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);

const array = input[1].split(" ").map(Number);

array.sort((a, b) => a - b);

let answer = 0;

for (let i = 0; i < n; i++) {
  answer += array[i] * (n - i);
}

console.log(answer);

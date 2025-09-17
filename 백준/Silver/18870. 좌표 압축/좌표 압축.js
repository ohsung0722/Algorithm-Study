const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B18870/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);

const array = input[1].split(" ").map(Number);

const set = [...new Set(array)];

set.sort((a, b) => a - b);

const map = new Map();
for (let i = 0; i < set.length; i++) {
  map.set(set[i], i);
}

let answer = "";
for (let i = 0; i < n; i++) {
  answer += map.get(array[i]) + " ";
}

console.log(answer);

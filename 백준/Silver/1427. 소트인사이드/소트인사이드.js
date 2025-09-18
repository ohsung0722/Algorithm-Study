const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B1427/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("").map(Number);

input.sort((a, b) => b - a);
console.log(input.join(""));

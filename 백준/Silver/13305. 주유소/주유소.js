const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B13305/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let minValue = 1000000000;
let city = input[2].split(" ").map(Number);
let distance = input[1].split(" ").map(Number);
let res = 0;

for (let i = 0; i < distance.length; i++) {
  if (minValue > city[i]) {
    minValue = city[i];
  }
  res += minValue * distance[i];
}

console.log(res);

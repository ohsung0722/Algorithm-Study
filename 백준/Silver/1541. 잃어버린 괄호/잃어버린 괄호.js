const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B1541/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const withoutMinus = input[0].split("-");
let answer = 0;
for (let i = 0; i < withoutMinus.length; i++) {
  const group = withoutMinus[i]
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b);
  if (i === 0) {
    answer += group;
  } else {
    answer -= group;
  }
}

console.log(answer);

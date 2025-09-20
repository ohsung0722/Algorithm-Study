const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B1789/input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let s = Number(input);
let res = 0;
let cnt = 0;
for (let i = 1; i <= s; i++) {
  res += i;
  if (res > s) {
    break;
  }
  cnt++;
}

console.log(cnt);

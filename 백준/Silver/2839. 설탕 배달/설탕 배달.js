const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B2839/input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let n = Number(input);

let res = 0;

while (n >= 3) {
  if (n % 5 === 0) {
    n -= 5;
    res++;
  } else {
    n -= 3;
    res++;
  }
}

n === 0 ? console.log(res) : console.log(-1);

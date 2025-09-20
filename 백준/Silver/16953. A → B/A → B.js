const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B16953/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let res = 0;

while (b > a) {
  if (b % 2 === 0) {
    b /= 2;
    res++;
  } else {
    if (b % 10 === 1) {
      b = (b - 1) / 10;
      res++;
    } else {
      break;
    }
  }
}

b === a ? console.log(res + 1) : console.log(-1);

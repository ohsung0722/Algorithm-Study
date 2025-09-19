const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B2839/input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const n = Number(input);

//5로 나눈 나머지 저장
let a = 0;

//5키로 개수
let count_5 = 0;
let count_3 = 0;

count_5 = Math.floor(n / 5);
a = n % 5;
if (a == 0) {
  console.log(count_5);
} else if (a == 1) {
  if (count_5 >= 1) {
    count_5 -= 1;
    count_3 = 2;
    console.log(count_5 + count_3);
  } else {
    console.log(-1);
  }
} else if (a == 2) {
  if (count_5 >= 2) {
    count_5 -= 2;
    count_3 = 4;
    console.log(count_5 + count_3);
  } else {
    console.log(-1);
  }
} else if (a == 3) {
  count_3 = 1;
  console.log(count_5 + count_3);
} else {
  if (count_5 >= 1) {
    count_5 -= 1;
    count_3 = 3;
    console.log(count_5 + count_3);
  } else {
    console.log(-1);
  }
}

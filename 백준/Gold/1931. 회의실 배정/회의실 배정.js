const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B1931/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let array = new Array();
for (let i = 1; i <= n; i++) {
  array.push(input[i].split(" ").map(Number));
}

let minValue = 0;
let count = 0;

array.sort((a, b) => {
  if (a[1] !== b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});

for (let i = 0; i < n; i++) {
  if (minValue <= array[i][0]) {
    minValue = array[i][1];
    count++;
  }
}

console.log(count);

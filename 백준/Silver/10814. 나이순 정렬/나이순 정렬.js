const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B10814/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const array = new Array();

for (let i = 1; i < n + 1; i++) {
  let info = input[i].split(" ");
  let [a, b] = [Number(info[0]), info[1]];
  array.push([a, b]);
}

array.sort((a, b) => {
  return a[0] - b[0];
});

let answer = "";
for (let i = 0; i < n; i++) {
  answer += array[i][0] + " " + array[i][1] + "\n";
}

console.log(answer);

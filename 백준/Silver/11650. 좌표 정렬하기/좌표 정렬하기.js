const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B11650/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const array = new Array();

for (let i = 1; i < n + 1; i++) {
  array.push(input[i].split(" ").map(Number));
}

function sortDef(a, b) {
  let a_x = a[0];
  let b_x = b[0];
  let a_y = a[1];
  let b_y = b[1];

  if (a_x != b_x) return a_x - b_x;
  else return a_y - b_y;
}

array.sort(sortDef);

let answer = "";
for (let i = 0; i < n; i++) {
  answer += array[i][0] + " " + array[i][1] + "\n";
}

console.log(answer);

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B1946/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let t = Number(input[0]);
let n_index = 1;
for (let i = 0; i < t; i++) {
  let n = Number(input[n_index]);
  n_index += n + 1;

  let array = new Array();
  for (let j = n_index - n; j < n_index; j++) {
    array.push(input[j].split(" ").map(Number));
  }

  array.sort((a, b) => a[0] - b[0]);
  let minValue = n + 1;
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (array[i][1] < minValue) {
      minValue = array[i][1];
      count++;
    }
  }
  console.log(count);
}

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B10816/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let array1 = input[1].split(" ").map(Number);
let array2 = input[3].split(" ").map(Number);

const map = new Map();
for (x of array1) {
  map.set(x, (map.get(x) || 0) + 1);
}

let result = "";
for (x of array2) {
  result += (map.get(x) || 0) + " ";
}

console.log(result);
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [h, w] = input[0].split(" ").map(Number);
let block = input[1].split(" ").map(Number);

let left = 0;
let right = w - 1;
let leftMax = 0;
let rightMax = 0;
let total = 0;

while (left < right) {
  leftMax = Math.max(leftMax, block[left]);
  rightMax = Math.max(rightMax, block[right]);

  if (leftMax < rightMax) {
    total += leftMax - block[left];
    left++;
  } else {
    total += rightMax - block[right];
    right--;
  }
}

console.log(total);

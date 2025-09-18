const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B11047/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const coin = input[0].split(" ").map(Number);
const n = coin[0];
const k = coin[1];

const array = new Array();

for (let i = 1; i < n + 1; i++) {
  array.push(Number(input[i]));
}

let restCoin = k;
let count = 0;
for (let i = n - 1; i >= 0; i--) {
  if (restCoin === 0) {
    break;
  }
  if (array[i] > k) {
    continue;
  }

  count += Math.floor(restCoin / array[i]);
  restCoin %= array[i];
}

console.log(count);

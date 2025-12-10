const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B18353/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const fight = input[1].split(" ").map(Number);
fight.reverse();

const arr = [0];

for (i = 0; i < N; i++) {
  if (fight[i] > arr[arr.length - 1]) {
    arr.push(fight[i]);
  } else {
    let a = lowerBound(arr, fight[i], 0, arr.length - 1);
    arr[a] = fight[i];
  }
}

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return end;
}

console.log(N - arr.length + 1);

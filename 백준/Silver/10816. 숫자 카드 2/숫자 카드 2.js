const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B10816/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function lowerBound(arr, target) {
  let start = 0;
  let end = arr.length;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}

function upperBound(arr, target) {
  let start = 0;
  let end = arr.length;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}

let n = Number(input[0]);
let m = Number(input[2]);
let array1 = input[1].split(" ").map(Number);
let array2 = input[3].split(" ").map(Number);

array1.sort((a, b) => a - b);

let result = "";
for (i of array2) {
  result += upperBound(array1, i) - lowerBound(array1, i) + " ";
}

console.log(result);

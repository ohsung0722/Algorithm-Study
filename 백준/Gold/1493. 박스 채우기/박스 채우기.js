const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B1493/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let box = input[0].split(" ").map(Number);
let n = Number(input[1]);
let box_vol = box[0] * box[1] * box[2];

let cube = new Array();
for (let i = 2; i < n + 2; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  cube.push([Math.pow(2, a), b]);
}

let res = 0;

//이미 채워진 큐브 개수
let filled = 0;
for (let i = cube.length - 1; i >= 0; i--) {
  let length = cube[i][0];
  let count = cube[i][1];

  //큐브 가득 채웠을 때
  let available =
    Math.floor(box[0] / length) *
    Math.floor(box[1] / length) *
    Math.floor(box[2] / length);

  available -= filled * 8;

  if (available < 0) available = 0;

  let use = available > count ? count : available;
  filled = filled * 8 + use;
  res += use;
}

filled === box_vol ? console.log(res) : console.log(-1);

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let board = Array.from({ length: n }, () => Array(n).fill(0));
let students = [];
let likeNum = new Map();
let dr = [1, -1, 0, 0];
let dc = [0, 0, 1, -1];

for (let i = 1; i <= n * n; i++) {
  let [student, ...like] = input[i].split(" ").map(Number);
  likeNum.set(student, new Set(like));
  students.push(student);
}

function location(student) {
  let maxR = -1;
  let maxC = -1;
  let maxLike = -1;
  let maxEmpty = -1;

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] !== 0) continue;

      let like = 0;
      let empty = 0;

      for (let d = 0; d < 4; d++) {
        let mr = r + dr[d];
        let mc = c + dc[d];

        if (mr < 0 || mr >= n || mc < 0 || mc >= n) continue;

        if (board[mr][mc] === 0) {
          empty++;
        } else if (likeNum.get(student).has(board[mr][mc])) {
          like++;
        }
      }

      if (like > maxLike) {
        maxLike = like;
        maxEmpty = empty;
        maxR = r;
        maxC = c;
      } else if (like === maxLike) {
        if (empty > maxEmpty) {
          maxEmpty = empty;
          maxR = r;
          maxC = c;
        } else if (empty === maxEmpty) {
          if (r < maxR) {
            maxR = r;
            maxC = c;
          } else if (r === maxR) {
            if (c < maxC) {
              maxC = c;
            }
          }
        }
      }
    }
  }

  board[maxR][maxC] = student;
}

for (let student of students) {
  location(student);
}

let result = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let student = board[i][j];
    let like = 0;

    for (let d = 0; d < 4; d++) {
      let mr = i + dr[d];
      let mc = j + dc[d];

      if (mr < 0 || mr >= n || mc < 0 || mc >= n) continue;

      if (likeNum.get(student).has(board[mr][mc])) {
        like++;
      }
    }

    if (like === 0) result += 0;
    else if (like === 1) result += 1;
    else if (like === 2) result += 10;
    else if (like === 3) result += 100;
    else if (like === 4) result += 1000;
  }
}

console.log(result);

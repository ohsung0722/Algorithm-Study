const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    let temp = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return temp;
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let [n, m] = input[0].split(" ").map(Number);
let lab = new Array();
for (let i = 1; i <= n; i++) {
  lab.push(input[i].split(" ").map(Number));
}

let empty = [];
let virus = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (lab[i][j] === 2) virus.push([i, j]);
    if (lab[i][j] === 0) empty.push([i, j]);
  }
}

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

function bfs(copyLab) {
  let queue = new Queue();
  for (let i of virus) {
    queue.enqueue(i);
  }

  while (queue.getLength() !== 0) {
    let v = queue.dequeue();
    let x = v[0];
    let y = v[1];

    for (let i = 0; i < 4; i++) {
      let mx = x + dx[i];
      let my = y + dy[i];

      if (mx < 0 || mx >= n || my < 0 || my >= m) continue;
      if (copyLab[mx][my] !== 0) continue;

      copyLab[mx][my] = 2;
      queue.enqueue([mx, my]);
    }
  }
}

let maxCount = 0;

function dfs(depth) {
  if (depth === 3) {
    let copyLab = lab.map((row) => [...row]);

    bfs(copyLab);

    let count = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (copyLab[i][j] === 0) count++;
      }
    }

    maxCount = Math.max(maxCount, count);
    return;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (lab[i][j] === 0) {
        lab[i][j] = 1;
        dfs(depth + 1);
        lab[i][j] = 0;
      }
    }
  }
}

dfs(0);
console.log(maxCount);

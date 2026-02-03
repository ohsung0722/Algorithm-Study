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

let n = Number(input[0]);
let houses = [];
for (let i = 0; i < n; i++) {
  houses[i] = [];
}

for (let i = 1; i <= n; i++) {
  let temp = input[i].split("").map(Number);
  houses[i - 1] = temp;
}

let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];

let visited = Array.from({ length: n }, () => Array(n).fill(false));

let home = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (visited[i][j] || houses[i][j] === 0) continue;
    let temp = bfs(i, j);
    home.push(temp);
  }
}

home.sort((a, b) => a - b);

let answer = "";
answer += home.length + "\n";
for (let i = 0; i < home.length; i++) {
  answer += home[i] + "\n";
}

console.log(answer);

function bfs(px, py) {
  let queue = new Queue();
  queue.enqueue([px, py]);
  visited[px][py] = true;
  let count = 1;

  while (queue.getLength() !== 0) {
    let [x, y] = queue.dequeue();
    for (let i = 0; i < 4; i++) {
      let sx = x + dx[i];
      let sy = y + dy[i];

      if (sx < 0 || sx >= n || sy < 0 || sy >= n) {
        continue;
      }

      if (visited[sx][sy]) continue;
      if (houses[sx][sy] === 0) continue;

      visited[sx][sy] = true;
      queue.enqueue([sx, sy]);
      count++;
    }
  }

  return count;
}

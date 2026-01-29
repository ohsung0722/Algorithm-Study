const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B7562/input.txt";
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

let testcase = Number(input[0]);
let visited;
let queue;

for (let i = 0; i < testcase; i++) {
  let n = 3 * i + 1;
  let l = Number(input[n]);
  let [x, y] = input[n + 1].split(" ").map(Number);
  let [w, z] = input[n + 2].split(" ").map(Number);
  visited = Array.from(new Array(300), () => new Array(300).fill(0));
  queue = new Queue();
  queue.enqueue([x, y]);
  console.log(bfs(w, z, l));
}

function bfs(w, z, l) {
  while (queue.getLength() !== 0) {
    let [x, y] = queue.dequeue();
    if (x === w && y === z) {
      return visited[x][y];
    }
    for (let [i, j] of [
      [x + 2, y + 1],
      [x - 2, y + 1],
      [x + 2, y - 1],
      [x - 2, y - 1],
      [x + 1, y + 2],
      [x + 1, y - 2],
      [x - 1, y + 2],
      [x - 1, y - 2],
    ]) {
      if (i < 0 || i >= l || j < 0 || j >= l) continue;
      if (visited[i][j] === 0) {
        queue.enqueue([i, j]);
        visited[i][j] = visited[x][y] + 1;
      }
    }
  }
}

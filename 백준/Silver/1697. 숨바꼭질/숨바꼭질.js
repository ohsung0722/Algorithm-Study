const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "Baekjoon/B1697/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

class Queue {
  constructor() {
    this.items = {};
    this.tailIndex = 0;
    this.headIndex = 0;
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

  peek() {
    return this.items[this.headIndex];
  }

  getLength() {
    this.tailIndex - this.headIndex;
  }
}

let n = Number(input[0]);
let m = Number(input[1]);
let visited = new Array(100001).fill(0);

let queue = new Queue();
queue.enqueue(n);
let answer;

while (queue.getLength() !== 0) {
  let v = queue.dequeue();
  if (v === m) {
    answer = visited[v];
    break;
  }

  for (let i of [v - 1, v + 1, 2 * v]) {
    if (i < 0 || i > 100000) continue;
    if (visited[i] === 0) {
      queue.enqueue(i);
      visited[i] = visited[v] + 1;
    }
  }
}

console.log(answer);

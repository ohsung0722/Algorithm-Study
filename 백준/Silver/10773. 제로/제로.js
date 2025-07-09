const fs = require('fs')
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'Baekjoon/B10773/input.txt'
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const K = Number(input[0])
const array = new Array();
for(let i = 1; i < K+1; i++){
    if(Number(input[i]) === 0){
        array.pop();
    } else{
        array.push(input[i])
    }
}

let sum = 0;
for(let i = 0; i < array.length; i++){
    sum += Number(array[i]);
}

console.log(sum)
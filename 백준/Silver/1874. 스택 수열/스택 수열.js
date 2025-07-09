const fs = require('fs')
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'Baekjoon/B1874/input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const n = Number(input[0])
const array = new Array();
const numberLine = new Array();
let count = 1;
let isPossible = true;

for(let i = 1; i < n+1; i++){
    const num = Number(input[i]);
    while(count <= num){
        numberLine.push(count);
        count++;
        array.push('+')
    }

    const popped = numberLine.pop();

    if(popped !== num){
        console.log('NO')
        isPossible = false;
        break;
    }

    array.push('-')
}

if(isPossible){
    const result = array.join('\n');
    console.log(result)
}

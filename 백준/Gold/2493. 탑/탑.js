const fs = require('fs')
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'Baekjoon/B2493/input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0])
const height = input[1].split(' ').map(Number)
const result = new Array();
const stack = new Array();

for(let i = 0; i < N; i++){
    //현재 높이
    const currentHeight = height[i];

    //stack에 있는 값보다 현재 높이가 높다면? stack 값 하나씩 제거 (필요가 없으니)
    while(stack.length && stack[stack.length - 1][1] < currentHeight){
        stack.pop();
    }

    //stack 길이가 0이면? 내 앞에 나보다 큰 기둥 없음. 즉, 0 값 push
    if(stack.length === 0){
        result.push(0)
    } 
    // stack 길이가 0이 아니면? stack 맨 끝값 넣기
    else[
        result.push(stack[stack.length - 1][0] + 1)
    ]
    //현재 높이와 index stack 에 저장
    stack.push([i, height[i]])
}

console.log(result.join(' '))


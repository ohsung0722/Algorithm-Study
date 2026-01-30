function solution(s) {
    let answer = 0;
    let word = '';
    let total = [];
    for(let i of s.replaceAll("\"", "")){
        if(!isNaN(i)){
            total.push(Number(i));
            continue;
        } 
        
        word += i;
        if(word === 'zero'){
            total.push(0);
            word = '';
        } else if(word === 'one'){
            total.push(1);
            word = '';
        } else if (word === 'two'){
            total.push(2)
            word = '';
        } else if(word === 'three'){
            total.push(3);
            word = '';
        } else if (word === 'four'){
            total.push(4);
            word = '';
        }else if(word === 'five'){
            total.push(5);
            word = '';
        } else if (word === 'six'){
            total.push(6);
            word = '';
        }else if(word === 'seven'){
            total.push(7);
            word = '';
        } else if (word === 'eight'){
            total.push(8);
            word = '';
        } else if (word === 'nine'){
            total.push(9); 
            word = '';
        } else {
            continue;
        }
    }
    
    for (let d of total) {
        answer = answer * 10 + d;
    }
    return answer;
}
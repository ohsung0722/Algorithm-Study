class Queue{
    constructor(){
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
    
    enqueue(item){
        this.items[this.tailIndex] = item;
        this.tailIndex++;
    }
    
    dequeue(){
        let temp = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++
        return temp;
    }
    
    getLength(){
        return this.tailIndex - this.headIndex;
    }
}

function solution(places) {
    var answer = [];
    for(let placeL = 0; placeL < 5; placeL++){
        let isCheck = 1;
        let place = places[placeL];
        let graph = [];
        for(let i = 0; i < 5; i++){
            graph[i] = place[i].split('');
        }
        
        let dx = [1, -1, 0, 0];
        let dy = [0, 0, 1, -1];
        
        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 5; j++){
                if(graph[i][j] !== 'P'){
                    continue;
                }
                
                let queue = new Queue();
                let visited = Array.from({length: 5}, () => Array(5).fill(-1));
                
                queue.enqueue([i,j]);
                visited[i][j] = 0
                while(queue.getLength() !== 0){
                    let [x,y] = queue.dequeue();
                    if(visited[x][y] === 2) continue;
                    for(let move = 0; move < 4; move++){
                        let moveX = x + dx[move];
                        let moveY = y + dy[move];
                        if(moveX < 0 || moveX > 4 || moveY < 0 || moveY > 4){
                            continue;
                        }
                        if(graph[moveX][moveY] === 'X'){
                            continue;
                        }
                        if(graph[moveX][moveY] === 'P' && visited[moveX][moveY] === -1){
                            isCheck = 0;
                            break;
                        }
                        
                        if(visited[moveX][moveY] === -1){
                            visited[moveX][moveY] = visited[x][y] + 1;
                            queue.enqueue([moveX, moveY]);
                        }
                    }
                    if(isCheck === 0) break;
                }
                if(isCheck === 0) break;
            }
            if(isCheck === 0) break;
        }
        answer.push(isCheck)
    }
    
    return answer;
}

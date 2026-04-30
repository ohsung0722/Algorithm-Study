def solution(players, callings):
    rank = {}
    for i in range(len(players)):
        rank[players[i]] = i
    
    for call in callings:
        index = rank[call]
        
        front = players[index - 1]
        players[index - 1], players[index] = players[index], players[index - 1]
        
        rank[call] = index - 1
        rank[front] = index
    return players
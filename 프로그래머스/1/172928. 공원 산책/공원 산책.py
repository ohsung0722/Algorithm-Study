def solution(park, routes):
    H = len(park)
    W = len(park[0])
    
    x, y = 0, 0
    for i in range(H):
        for j in range(W):
            if park[i][j] == 'S':
                x, y = i, j
    
    direction = {
        'E': (0, 1),
        'W': (0, -1),
        'S': (1, 0),
        'N': (-1, 0),
    }
    
    for route in routes:
        direct, dist = route.split()
        dist = int(dist)
        
        dx, dy = direction[direct]
        
        nx, ny = x, y
        isPossible = True
        
        for _ in range(dist):
            nx += dx
            ny += dy
            
            if nx < 0 or nx >= H or ny < 0 or ny >= W:
                isPossible = False
                break
            
            if park[nx][ny] == 'X':
                isPossible = False
                break
        
        if isPossible:
            x, y = nx, ny
        
        
    return [x, y]
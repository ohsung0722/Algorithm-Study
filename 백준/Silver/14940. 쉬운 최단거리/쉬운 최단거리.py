from collections import deque

n, m = map(int, input().split())

graph = [list(map(int, input().split())) for _ in range(n)]

dx = [1, 0, -1, 0]
dy = [0, -1, 0, 1]

visited = [[False] * m for _ in range(n)]
distance = [[0] * m for _ in range(n)]

target_x = 0
target_y = 0

for i in range(n):
    for j in range(m):
        if graph[i][j] == 2:
            target_x, target_y = i, j

def bfs(x, y):
    queue = deque([(x,y)])
    visited[x][y] = True

    while queue:
        qx, qy = queue.popleft()
        
        for i in range(4):
            nx = qx + dx[i]
            ny = qy + dy[i]

            if nx < 0 or nx >= n or ny < 0 or ny >= m or graph[nx][ny] == 0 or visited[nx][ny]:
                continue
            
            visited[nx][ny] = True
            queue.append((nx, ny))
            distance[nx][ny] = distance[qx][qy] + 1

bfs(target_x,target_y)

for i in range(n):
    for j in range(m):
        if distance[i][j] == 0 and graph[i][j] == 1:
            distance[i][j] = -1
        print(distance[i][j], end = ' ')
    print()
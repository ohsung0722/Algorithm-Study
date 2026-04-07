from collections import deque

m, n = map(int, input().split())

graph = [list(map(int, input().split())) for _ in range(n)]

queue = deque()

for i in range(n):
    for j in range(m):
        if graph[i][j] == 1:
            queue.append((i, j))

dx = [1, 0, -1, 0]
dy = [0, -1, 0, 1]

while queue:
    x, y = queue.popleft()

    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]

        if nx < 0 or nx >= n or ny < 0 or ny >= m:
            continue

        if graph[nx][ny] != 0:
            continue
        
        queue.append((nx, ny))
        graph[nx][ny] = graph[x][y] + 1

answer = 0

for i in range(n):
    isZero = False
    for j in range(m):
        if graph[i][j] == 0:
            isZero = True
            answer = -1
            break
        
        answer = max(answer, graph[i][j])
    
    if isZero:
        break

if answer == -1:
    print(answer)
else:
    print(answer - 1)
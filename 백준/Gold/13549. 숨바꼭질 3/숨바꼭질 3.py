from collections import deque

n, k = map(int, input().split())
INF = int(1e9)

visited = [INF] * 100001

def move(index, x):
    if index == 0:
        return x + 1
    if index == 1:
        return x - 1
    if index == 2:
        return 2 * x

def bfs():
    queue = deque([n])
    visited[n] = 0

    while queue:
        x = queue.popleft()

        if x == k:
            return

        for i in range(3):
            nx = move(i, x)
            
            if nx < 0 or nx > 100000:
                continue
            
            if i == 2 and visited[nx] > visited[x]:
                visited[nx] = visited[x]
                queue.appendleft(nx)
            elif (i == 1 or i == 0) and visited[nx] > visited[x] + 1:
                visited[nx] = visited[x] + 1
                queue.append(nx)

bfs()

print(visited[k])
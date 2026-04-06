'''
전체 프로세스

그래프 생성(u,v 무방향 그래프)
방문하지 않은 점에 대해 bfs
'''

from collections import deque
import sys

input = sys.stdin.readline

n, m = map(int, input().split())

graph = [[] for _ in range(n + 1)]

for _ in range(m):
    u, v = map(int, input().split())
    graph[u].append(v)
    graph[v].append(u)

visited = [False] * (n + 1)

def bfs(x):
    queue = deque([x])
    visited[x] = True

    while queue:
        node = queue.popleft()

        for next in graph[node]:
            if visited[next]:
                continue

            visited[next] = True
            queue.append(next)

count = 0
for i in range(1, n + 1):
    if visited[i]:
        continue

    bfs(i)
    count += 1

print(count)
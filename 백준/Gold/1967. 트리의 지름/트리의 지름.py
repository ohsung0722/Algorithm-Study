'''
Idea

일단 트리에서 가장 긴 경로의 두 점
-> 특정 노드에서 가장 먼 노드 A + A에서 가장 먼 노드 B

'''
from collections import deque
import sys
input = sys.stdin.readline

n = int(input())

graph = [[] for _ in range(n + 1)]
for _ in range(n - 1):
    a, b, c = map(int, input().split())
    graph[a].append((b, c))
    graph[b].append((a, c))

def bfs(start):
    visited = [-1] * (n + 1)
    queue = deque([start])
    visited[start] = 0

    while queue:
        x = queue.popleft()

        for node, cost in graph[x]:
            if visited[node] != -1:
                continue

            visited[node] = visited[x] + cost
            queue.append(node)
        
    max_node = 1
    max_dist = 0

    for i in range(1, n+1):
        if visited[i] > max_dist:
            max_dist = visited[i]
            max_node = i
    
    return max_node, max_dist

node, _ = bfs(1)
_, dist = bfs(node)

print(dist)
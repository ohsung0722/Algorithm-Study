import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

n = int(input())

graph = [[] for _ in range(n + 1)]
parent = [0] * (n + 1)

for _ in range(n - 1):
    p, c = map(int, input().split())
    graph[p].append(c)
    graph[c].append(p)

def dfs(x):
    for next in graph[x]:
        if parent[next] == 0:
            parent[next] = x
            dfs(next)

dfs(1)

for i in range(2, n + 1):
    print(parent[i])
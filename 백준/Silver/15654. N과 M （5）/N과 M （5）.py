n, m = map(int, input().split())

graph = list(map(int, input().split()))
graph.sort()

visited = [False] * n
path = []

def dfs(depth):
    if depth == m:
        print(*path)
        return
    
    for i in range(n):
        if visited[i]:
            continue

        visited[i] = True
        path.append(graph[i])
        dfs(depth + 1)
        path.pop()
        visited[i] = False

dfs(0)
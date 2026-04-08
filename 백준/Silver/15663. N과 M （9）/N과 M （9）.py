n, m = map(int, input().split())

arr = list(map(int, input().split()))
arr.sort()

visited = [False] * n
path = []

def dfs(depth):
    if depth == m:
        print(*path)
        return
    
    prev = 0
    for i in range(n):
        if visited[i]:
            continue

        #같은 depth에서 같은 숫자로 시작하는 case 막기
        if prev == arr[i]:
            continue

        visited[i] = True
        prev = arr[i]
        path.append(arr[i])
        dfs(depth + 1)
        path.pop()
        visited[i] = False 

        

dfs(0)
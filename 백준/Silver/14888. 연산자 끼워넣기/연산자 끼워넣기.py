n = int(input())
a = list(map(int, input().split()))
plus, minus, multiple, divide = map(int, input().split())

max_val = -10**10
min_val = 10**10

def dfs(depth, result):
    global max_val, min_val
    global plus, minus, multiple, divide

    if depth == n:
        max_val = max(max_val, result)
        min_val = min(min_val, result)
        return
    
    if plus > 0:
        plus -= 1
        dfs(depth + 1, result + a[depth])
        plus += 1

    if minus > 0:
        minus -= 1
        dfs(depth + 1, result - a[depth])
        minus += 1
    
    if multiple > 0:
        multiple -= 1
        dfs(depth + 1, result * a[depth])
        multiple += 1
    
    if divide > 0:
        divide -= 1
        if(result < 0):
            temp = result * -1 // a[depth] * -1
            dfs(depth + 1, temp)
        else:
            dfs(depth + 1, result // a[depth])
        divide += 1
        
dfs(1, a[0])

print(max_val)
print(min_val)
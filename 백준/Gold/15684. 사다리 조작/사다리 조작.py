'''
전체 프로세스

데이터 전처리 (N, H + 1)
가로선 최대 3개 -> 모든 경우 계산
'''

'''
데이터 전처리

n, m, h
가로선 위치 graph에 넣기
'''

n, m, h = map(int, input().split())


graph = [[False] * (n + 1) for _ in range(h + 1)]
for _ in range(m):
    a, b = map(int, input().split())
    graph[a][b] = True


'''
check()
모든 세로선에 대해 i-> i로 나오는지 check


'''
def check():
    for j in range(1, n + 1):
        col = j
        for i in range(1, h + 1):
            if graph[i][col]:
                col += 1
            elif col > 1 and graph[i][col - 1]:
                col -= 1
        
        if col != j:
            return False
    
    return True

'''
모든 경우 계산

종료 조건
    모든 세로선에 대해 i -> i 로 나올 경우 -> check()
    depth == 3 or depth >= answer

모든 선에 대해 가로선 놓기
    이미 True면 continue
    왼쪽이 붙어있으면 continue
    오른쪽이 붙어있으면 continue
'''

answer = 4
def dfs(index, col, count):
    global answer

    if check():
        answer = min(answer, count)
        return

    if count == 3 or count >= answer:
        return
    
    for i in range(index, h + 1):
        start_col = col if i == index else 1
        for j in range(start_col, n):
            if graph[i][j]:
                continue
            if j > 1 and graph[i][j - 1]:
                continue
            if j < n - 1 and graph[i][j + 1]:
                continue

            graph[i][j] = True
            dfs(i, j + 2, count + 1)
            graph[i][j] = False

dfs(1, 1, 0)
if answer >= 4:
    answer = -1
print(answer)
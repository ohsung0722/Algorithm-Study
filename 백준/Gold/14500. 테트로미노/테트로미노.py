"""
전체 프로세스

데이터 전처리
for문 -> 모든 칸 시작
    dfs(ㅗ 제외) 최대값 계산
    ㅗ 최대값 계산
최대값 비교 후 출력
"""

"""
데이터 전처리

n,m
graph
dx, dy
visited
"""

n, m = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(n)]

dx = [1, 0, -1, 0]
dy = [0, -1, 0, 1]

visited = [[False] * m for _ in range(n)]

"""
dfs

max_value = 0
depth가 4면
    value 합 출력
    return

for문 돌리기 (4)
    visited or 그래프 넘어가면 continue
    visited true
    값 넣기
    dfs
    값 빼기
    visited false
"""


max_value = 0

def dfs(x, y, depth, value):
    global max_value
    if depth == 3:
        max_value = max(max_value, value)
        return

    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]

        if nx < 0 or nx >= n or ny < 0 or ny >= m or visited[nx][ny] == True:
            continue

        visited[nx][ny] = True
        dfs(nx, ny, depth + 1, value + graph[nx][ny])
        visited[nx][ny] = False

"""
ㅗ모양 체크

values[]
가운데 좌표 + 상하좌우 값 삽입
sort() 후 제일 큰 값 기준으로 3개 뽑아서 계산
"""

def check_t(x, y):
    global max_value
    
    values = []
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]

        if nx < 0 or nx >= n or ny < 0 or ny >= m:
            continue
    
        values.append(graph[nx][ny])
    
    if len(values) >= 3:
        values.sort(reverse=True)
        
        max_value = max(max_value, values[0] + values[1] + values[2] + graph[x][y])

"""
전체 좌표 기준 함수 돌리기
"""
for i in range(n):
    for j in range(m):
        visited[i][j] = True
        dfs(i, j, 0, graph[i][j])
        visited[i][j] = False
        check_t(i, j)

print(max_value)
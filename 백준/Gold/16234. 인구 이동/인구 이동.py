"""
전체 프로세스

데이터 전처리
인구 이동
    L명 이상 R명 이하일 때만 인구 이동
    국경선 열림 + 인접 나라 = 연합
    연합을 이루는 각 나라 인구 수 = 연합 인구수 / 연합 칸 개수 (소수점 제거)
"""

"""
데이터 전처리
N, L, R
graph

day(인구이동 날짜)
"""

from collections import deque

n, l, r = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(n)]

day = 0

"""
인구 이동
    L명 이상 R명 이하일 때만 인구 이동
    국경선 열림 + 인접 나라 = 연합
    연합을 이루는 각 나라 인구 수 = 연합 인구수 / 연합 칸 개수 (소수점 제거)

    모든 칸 탐색 (bfs)
        국경선 L명 이상 R명 이하 -> 그룹에 추가
        return 그룹 총 인원, 그룹
    
    모든 칸에 대해 bfs
    if 그룹 나라 개수 >= 2 -> 인구 이동 (연합 인구 수 / 연합 칸 개수)
"""

dx = [1, 0, -1, 0]
dy = [0, -1, 0, 1]

def bfs(x, y, visited):
    queue = deque([(x, y)])
    visited[x][y] = True
    union = [(x, y)]
    total = graph[x][y]

    while queue:
        qx, qy = queue.popleft()
        for i in range(4):
            nx = qx + dx[i]
            ny = qy + dy[i]

            if nx < 0 or nx >= n or ny < 0 or ny >= n or visited[nx][ny] == True:
                continue

            if abs(graph[qx][qy] - graph[nx][ny]) >= l and abs(graph[qx][qy] - graph[nx][ny]) <= r:
                visited[nx][ny] = True
                queue.append((nx, ny))
                union.append((nx, ny))
        
                total += graph[nx][ny]

    return total, union

while True:
    visited = [[False] * n for _ in range(n)]
    isMove = False
    for i in range(n):
        for j in range(n):
            if visited[i][j] == True:
                continue
            
            total, union = bfs(i, j, visited)

            if len(union) >= 2:
                isMove = True
                people = total // len(union)

                for k in union:
                    x, y = k
                    graph[x][y] = people
    
    if not isMove:
        break
    
    day += 1

print(day)
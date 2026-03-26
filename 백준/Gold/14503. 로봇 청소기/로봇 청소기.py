"""
전체 시뮬레이션

데이터 전처리
청소기 작동
청소한 칸의 개수 출력
"""
from collections import deque

"""
데이터 전처리

n,m 입력
좌표 (r,c) 방향 (d) 입력
graph
"""

n, m = map(int, input().split())
r, c, d = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(n)]

"""
청소기 작동
dx, dy 정의
청소되지 않은 경우 청소 -> visited

"""

dx = [-1, 0, 1, 0] # 0->3->2->1 순
dy = [0, 1, 0, -1]
visited = [[False] * m for _ in range(n)]
count = 0

def cleaner(x, y, d):
    global count
    while True:
        if graph[x][y] == 0:
            graph[x][y] = 2
            count += 1
        
        found = False
        for _ in range(4):
            d = (d + 3) % 4
            nx = x + dx[d]
            ny = y + dy[d]

            if nx < 0 or nx >= n or ny < 0 or ny >= m or graph[nx][ny] != 0:
                continue
            
            if graph[nx][ny] == 0:
                x = nx
                y = ny
                found = True
                break
        
        if not found:
            back_d = (d + 2) % 4
            nx = x + dx[back_d]
            ny = y + dy[back_d]

            if nx < 0 or nx >= n or ny < 0 or ny >= m or graph[nx][ny] == 1:
                break

            x = nx
            y = ny

cleaner(r,c,d)
print(count)



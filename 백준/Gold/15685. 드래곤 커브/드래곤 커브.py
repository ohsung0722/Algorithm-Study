'''
전체 프로세스

데이터 전처리
드래곤 커브 삽입
네 꼭짓점이 모두 드래곤 커브인 사각형 개수 세기
'''

'''
데이터 전처리
n
드래곤 커브 정보 (x, y, d, g)
graph(드래곤커브 삽입)
dx, dy
'''

n = int(input())
graph = [[False] * 101 for _ in range(101)]

dx = [1, 0, -1, 0]
dy = [0, -1, 0, 1]

'''
드래곤 커브 삽입

드래곤 커브 방향 생성
graph에 삽입
'''

for _ in range(n):
    x, y, d, g = map(int, input().split())

    direction = [d]

    for i in range(g):
        for j in range(len(direction) - 1, -1, -1):
            direction.append((direction[j] + 1) % 4)
    
    graph[y][x] = True
    for d in direction:
        x += dx[d]
        y += dy[d]
        graph[y][x] = True

answer = 0
for y in range(100):
    for x in range(100):
        if graph[y][x] and graph[y][x + 1] and graph[y + 1][x] and graph[y + 1][x + 1]:
            answer += 1

print(answer)
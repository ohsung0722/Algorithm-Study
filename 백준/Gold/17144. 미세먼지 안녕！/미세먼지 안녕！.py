r, c, t = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(r)]

# 공기청정기 위치 찾기
cleaner = []
for i in range(r):
    if graph[i][0] == -1:
        cleaner.append(i)

top, bottom = cleaner[0], cleaner[1]

dx = [1, 0, -1, 0]
dy = [0, 1, 0, -1]

def spread():
    temp = [[0] * c for _ in range(r)]
    temp[top][0] = -1
    temp[bottom][0] = -1

    for x in range(r):
        for y in range(c):
            if graph[x][y] > 0:
                amount = graph[x][y] // 5
                count = 0

                for d in range(4):
                    nx = x + dx[d]
                    ny = y + dy[d]

                    if nx < 0 or nx >= r or ny < 0 or ny >= c:
                        continue
                    if graph[nx][ny] == -1:
                        continue

                    temp[nx][ny] += amount
                    count += 1

                temp[x][y] += graph[x][y] - amount * count

    return temp

def operate():
    # 위쪽 공기청정기 (반시계)
    for i in range(top - 1, 0, -1):
        graph[i][0] = graph[i - 1][0]

    for j in range(c - 1):
        graph[0][j] = graph[0][j + 1]

    for i in range(top):
        graph[i][c - 1] = graph[i + 1][c - 1]

    for j in range(c - 1, 1, -1):
        graph[top][j] = graph[top][j - 1]

    graph[top][1] = 0
    graph[top][0] = -1

    # 아래쪽 공기청정기 (시계)
    for i in range(bottom + 1, r - 1):
        graph[i][0] = graph[i + 1][0]

    for j in range(c - 1):
        graph[r - 1][j] = graph[r - 1][j + 1]

    for i in range(r - 1, bottom, -1):
        graph[i][c - 1] = graph[i - 1][c - 1]

    for j in range(c - 1, 1, -1):
        graph[bottom][j] = graph[bottom][j - 1]

    graph[bottom][1] = 0
    graph[bottom][0] = -1

for _ in range(t):
    graph = spread()
    operate()

answer = 0
for i in range(r):
    for j in range(c):
        if graph[i][j] > 0:
            answer += graph[i][j]

print(answer)
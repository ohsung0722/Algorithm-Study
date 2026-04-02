'''
전체 프로세스

데이터 전처리
감시 영역 체크
백트래킹
사각지대 계산 = #이 아닌 곳
'''

'''
데이터 전처리

n, m
graph
cctv 위치
dx, dy
direction (CCTV 방향 모든 경우)
'''

n, m = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(n)]

cctv = []
for i in range(n):
    for j in range(m):
        if graph[i][j] != 0 and graph[i][j] != 6:
            cctv.append((i, j, graph[i][j]))

dx = [1, 0, -1, 0]
dy = [0, -1, 0, 1]

direction = {
    1: [[0], [1], [2], [3]],
    2: [[0, 2], [1, 3]],
    3: [[0, 1], [1, 2], [2, 3], [3, 0]],
    4: [[0, 1, 2], [1, 2, 3], [2, 3, 0], [3, 0, 1]],
    5: [[0, 1, 2, 3]]
}

'''
감시 영역 체크 (그래프, cctv 위치, 방향)

범위 넘어가면 멈춤
벽 만나면 멈춤
0이면 -> #으로
'''

def check(temp_graph, x, y, direct):
    for d in direct:
        nx = x
        ny = y
        while True:
            nx += dx[d]
            ny += dy[d]

            if nx < 0 or nx >= n or ny < 0 or ny >= m:
                break

            if temp_graph[nx][ny] == 6:
                break

            if temp_graph[nx][ny] == 0:
                temp_graph[nx][ny] = '#'


'''
백트래킹(index, graph)

만약 index가 cctv len이랑 같으면
    전체 그래프 탐색
     0인 개수 세기
     min 최소값 계산

cctv[index] -> cctv_name, x, y

cctv 방향만큼 반복 
    복사된 graph 생성 -> 새로운 방향은 그래프를 초기화시켜야 하기 때문
    check(graph, x, y, cctv 방향)
    dfs(index + 1, 복사된 graph) 
'''

answer = int(1e9)

def dfs(index, graph):
    global answer

    if index == len(cctv):
        count = 0
        for i in range(n):
            for j in range(m):
                if graph[i][j] == 0:
                    count += 1
        
        answer = min(count, answer)
        return
    
    x, y, cctv_name = cctv[index]

    for direc in direction[cctv_name]:
        new_graph = [row[:] for row in graph]
        check(new_graph, x, y, direc)
        dfs(index + 1, new_graph)

dfs(0, graph)

print(answer)
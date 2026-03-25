"""
전체 프로세스

N 입력
N개의 줄 S 입력
스타트 방문 경우 측정
    N / 2 depth 들어가면 종료
        스타트, 링크 능력치 최소값 계산
능력치 차이 최소값 출력
"""

n = int(input())
power = [list(map(int, input().split())) for _ in range(n)]

visited = [False] * (n + 1)
visited[0] = True

answer = int(1e9)

def dfs(idx, depth):
    global answer

    if depth == n // 2:
        answer = min(answer, calc())
        return
    
    for i in range(idx, n):
        visited[i] = True
        dfs(i + 1, depth + 1)
        visited[i] = False

"""
calc()

스타트, 링크 능력치 최소값 계산

스타트 = 0
링크 = 0

visited 순회
    visited true -> 스타트 +
    visited false -> 링크 +

리턴 스타트 - 링크 (절대값)
"""

def calc():
    start = 0 
    link = 0

    for i in range(n):
        for j in range(i + 1, n):
            if visited[i] == True and visited[j] == True:
                start += power[i][j] + power[j][i]
            elif visited[i] == False and visited[j] == False:
                link += power[i][j] + power[j][i]

    return abs(start - link)

dfs(1,1)

print(answer)
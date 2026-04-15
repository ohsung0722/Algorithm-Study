'''
전체 프로세스

데이터 전처리
모든 쌍에 대한 최솟값 -> 플로이드-워셜
'''
import sys
input = sys.stdin.readline

n = int(input())
m = int(input())

INF = int(1e9)
dist = [[INF] * (n + 1) for _ in range(n + 1)]

# 자기 자신으로 가는 비용 = 0
for i in range(1, n + 1):
    dist[i][i] = 0

# 버스 정보 입력
for _ in range(m):
    a, b, c = map(int, input().split())
    dist[a][b] = min(dist[a][b], c) # 문제 조건: 노선이 하나가 아닐 수 있음

# 플로이드 - 워셜
for k in range(1, n + 1):
    for i in range(1, n + 1):
        for j in range(1, n + 1):
            if dist[i][j] > dist[i][k] + dist[k][j]:
                dist[i][j] = dist[i][k] + dist[k][j]

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if dist[i][j] == INF:
            print(0, end=' ')
        else:
            print(dist[i][j], end = ' ')
    print()
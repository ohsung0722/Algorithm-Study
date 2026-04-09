#집 개수
n = int(input())

#색깔 별 집 가격
cost = [list(map(int, input().split())) for _ in range(n)]

#각 집 별 최소값 저장
dp = [[0] * 3 for _ in range(n)]

#초기값
dp[0][0] = cost[0][0]
dp[0][1] = cost[0][1]
dp[0][2] = cost[0][2]

for i in range(1, n):
    dp[i][0] = min(dp[i - 1][1], dp[i - 1][2]) + cost[i][0]
    dp[i][1] = min(dp[i - 1][0], dp[i - 1][2]) + cost[i][1]
    dp[i][2] = min(dp[i - 1][0], dp[i - 1][1]) + cost[i][2]

print(min(dp[n - 1][0], dp[n - 1][1], dp[n-1][2]))
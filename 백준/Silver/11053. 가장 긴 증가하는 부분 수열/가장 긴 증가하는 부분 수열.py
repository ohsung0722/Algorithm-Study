'''
각 원소를 마지막으로 하는 증가 수열 길이가 최대인 것 찾기
-> dp로 풀어보자
'''

n = int(input())

arr = list(map(int, input().split()))

dp = [1] * n

for i in range(n):
    for j in range(i):
        if arr[j] < arr[i]:
            dp[i] = max(dp[i], dp[j] + 1)

print(max(dp))
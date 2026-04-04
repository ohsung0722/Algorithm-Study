'''
n -> 10**5
m -> 10**5

-> n*m은 너무 큼
누적합으로 최적화하기
prefix[i] = prefix[i - 1] + arr[]
'''


n, m = map(int, input().split())

array = list(map(int, input().split()))

prefix = [0] * (n + 1)

for i in range(1, n + 1):
    prefix[i] = prefix[i - 1] + array[i - 1]

for _ in range(m):
    i, j = map(int, input().split())
    answer = prefix[j] - prefix[i - 1]
    print(answer)
n = int(input())
a = list(map(int, input().split()))
b, c = map(int, input().split())

total = 0
for i in a:
    total += 1
    temp = i - b

    if temp > 0:
        total += temp // c
        if temp % c != 0:
            total += 1

print(total)

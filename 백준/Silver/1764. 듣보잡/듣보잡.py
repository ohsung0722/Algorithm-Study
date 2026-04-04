n, m = map(int, input().split())

d = set()
b = set()

for i in range(n):
    d.add(input())

for _ in range(m):
    b.add(input())

inter = d & b

inter = list(inter)
inter.sort()

print(len(inter))
for i in inter:
    print(i)
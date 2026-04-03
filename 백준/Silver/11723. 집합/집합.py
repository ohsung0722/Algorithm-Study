import sys
input = sys.stdin.readline

m = int(input())

s = set()
for _ in range(m):
    data = input().split()
    if len(data) == 2:
        a, x = data[0], int(data[1])
        if a == 'add':
            s.add(x)
        elif a == 'check':
            print(1 if x in s else 0)
        elif a == 'remove':
            if x in s:
                s.remove(x)
        elif a == 'toggle':
            if x in s:
                s.remove(x)
            else:
                s.add(x)
    else:
        if data[0] == 'all':
            s = set(range(1, 21))
        else:
            s.clear()
    

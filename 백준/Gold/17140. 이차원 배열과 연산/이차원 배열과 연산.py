from collections import Counter

r, c, k = map(int, input().split())
A = [list(map(int, input().split())) for _ in range(3)]

def operate_R(arr):
    new_arr = []
    max_len = 0

    for row in arr:
        counter = Counter(row)
        if 0 in counter:
            del counter[0]

        pairs = sorted(counter.items(), key=lambda x: (x[1], x[0]))

        new_row = []
        for num, cnt in pairs:
            new_row.extend([num, cnt])

        new_row = new_row[:100]
        max_len = max(max_len, len(new_row))
        new_arr.append(new_row)

    for row in new_arr:
        row.extend([0] * (max_len - len(row)))

    return new_arr

def transpose(arr):
    return list(map(list, zip(*arr)))

time = 0

while time <= 100:
    if 0 <= r - 1 < len(A) and 0 <= c - 1 < len(A[0]) and A[r - 1][c - 1] == k:
        print(time)
        break

    if time == 100:
        print(-1)
        break

    if len(A) >= len(A[0]):
        A = operate_R(A)

    else:
        A = transpose(A)
        A = operate_R(A)
        A = transpose(A)

    time += 1
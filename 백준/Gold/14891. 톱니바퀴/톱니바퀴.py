"""
전체 프로세스

데이터 전처리
톱니바퀴 회전
점수 계산
출력
"""

"""
데이터 전처리
톱니바퀴 wheel
회전 횟수 k
회전시킨 톱니바퀴 번호, 방향 wnum, d
"""

from collections import deque

wheel = [list(map(int, input())) for _ in range(4)]
k = int(input())

"""
톱니바퀴 회전
deque.rotate(1) -> 오른쪽으로 한칸씩 밀기
deque.rotate(-1) -> 왼쪽으로 한칸씩 밀기
"""

def rotateDef(array, direction):
    r_array = deque(array)
    r_array.rotate(direction)
    k = list(r_array)
    return k

"""
톱니바퀴 회전 기준
wheel[i][2] vs wheel[i + 1][6]

극이 같으면 회전 X
극이 다르면 회전
"""

for _ in range(k):
    num, direction = map(int, input().split())
    num -= 1

    rotate = [0] * 4
    rotate[num] = direction
    #왼쪽
    for i in range(num, 0, -1):
        if wheel[i - 1][2] != wheel[i][6]:
            rotate[i - 1] = -1 * rotate[i]
        else:
            break
    
    #오른쪽
    for i in range(num, 3):
        if wheel[i][2] != wheel[i + 1][6]:
            rotate[i + 1] = -1 * rotate[i]
        else:
            break
    
    for i in range(4):
        wheel[i] = rotateDef(wheel[i], rotate[i])


"""
점수 계산
"""
point = 0
for i in range(4):
    if wheel[i][0] == 1:
        point += 2 ** i 

print(point)
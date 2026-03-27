"""
전체 프로세스

데이터 전처리
로봇 옮기기
단계 출력
"""

from collections import deque

"""
데이터 전처리
"""

n, k = map(int, input().split())
belt = deque(map(int, input().split()))

visited = [0] * n

level = 0

"""
로봇 올리기
"""
def putRobot():
    if belt[0] > 0:
        visited[0] = 1
        belt[0] -= 1
    else:
        visited[0] = 0

"""
내구도 0인 칸 개수 세기
"""

def countZero():
    count = 0
    for i in range(2 * n):
        if belt[i] == 0:
            count += 1
    return count

"""
rotate(로봇)
"""
def rotateBeltAndRobot(visited):
    belt.rotate(1)
    rDeque = deque(visited)
    rDeque.rotate(1)
    lDeque = list(rDeque)
    lDeque[0] = 0
    lDeque[n - 1] = 0
    return lDeque

"""
로봇 이동
    앞 칸에 로봇 X & 내구도 1 이상
"""

def moveRobot():
    for i in range(n - 2, 0, -1):
        if visited[i] == 1 and visited[i + 1] == 0 and belt[i + 1] > 0:
            visited[i + 1] = 1
            visited[i] = 0
            belt[i + 1] -= 1

"""
로봇 옮기기
    rotate
    로봇 이동
        앞 칸에 로봇 X & 내구도 1 이상
    내구도가 0이 아닌 곳 로봇 올리기
    내구도가 0이 아닌 칸 개수 측정
"""

while True:
    level += 1
    visited = rotateBeltAndRobot(visited)
    moveRobot()
    putRobot()

    if countZero() >= k:
        break

print(level)


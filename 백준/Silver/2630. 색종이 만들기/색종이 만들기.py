'''
전체 프로세스

데이터 전처리

색 검사
4개의 사각형으로 나누기 -> 반복
'''

n = int(input())

graph = [list(map(int, input().split())) for _ in range(n)]

'''
나누기 함수(시작 좌표, 가로 길이)

각 좌표 돌면서, 시작 좌표 색과 다르면
사각형 나누기
'''

blue = 0
white = 0

def divide(x, y, length):
    global white, blue
    color = graph[x][y]

    for i in range(x, x + length):
        for j in range(y, y + length):
            if color != graph[i][j]:
                half = length // 2
                divide(x, y, half)
                divide(x + half, y, half)
                divide(x, y + half, half)
                divide(x + half, y + half, half)
                return

    if color == 1:
        blue += 1
    else:
        white += 1

divide(0, 0, n)

print(white)
print(blue)
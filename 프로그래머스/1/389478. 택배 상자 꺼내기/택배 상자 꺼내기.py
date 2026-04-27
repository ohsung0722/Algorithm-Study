def getCol(num, w):
    row = (num - 1) // w
    col = (num - 1) % w
    
    if row % 2 == 0:
        return col
    else:
        return w - col - 1

def solution(n, w, num):
    start = getCol(num, w)
    answer = 0
    
    for i in range(num, n + 1):
        if getCol(i, w) == start:
            answer += 1
    
    return answer
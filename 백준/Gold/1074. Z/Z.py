'''
answer: 사분면 위치

1사분면: r < half and c < half
2사분면: r < half and c >= half -> c -= half
3사분면: r >= half and c < half -> r -= half
4사분면: r >= half and c >= half -> 
'''

n, r, c = map(int, input().split())
answer = 0

while n > 0:
    half = 2 ** (n - 1)
    area = half * half

    if r < half and c >= half:
        c -= half
        answer += area
    
    elif r >= half and c < half:
        r -= half
        answer += 2 * area
    
    elif r >= half and c >= half:
        r -= half
        c -= half
        answer += 3 * area
    
    n -= 1

print(answer)
    

    
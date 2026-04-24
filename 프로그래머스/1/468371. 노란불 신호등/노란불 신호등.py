import math

def lcm(a, b):
    return a * b // math.gcd(a, b)

def solution(signals):
    time = 1
    for signal in signals:
        g, y, r = signal
        total = g + y + r
        time = lcm(time, total)
        
    
    for i in range(1, time + 1):
        isAllYellow = True
        for signal in signals:
            g, y, r = signal
            total = g + y + r
            index = i % total
            if not (index <= g + y and index > g):
                isAllYellow = False
                break
        
        if isAllYellow:
            return i
        

    return -1
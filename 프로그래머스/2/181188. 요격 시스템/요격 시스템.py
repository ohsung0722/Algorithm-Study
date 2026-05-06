def solution(targets):
    targets.sort(key=lambda x:x[1])
    
    answer = 0
    launch = -1
    for s, e in targets:
        if launch <= s:
            answer += 1
            launch = e
        
    return answer
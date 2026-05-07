'''
1. 시작 시간 기준 정렬
2. 현재 과제와 다음 과제 사이 시간 계산
3. 현재 과제 끝낼 수 있으면 완료
    4. 끝내고 시간이 남으면 스택에 있는 과제 수행
5. 못끝내면 스택에 넣기
'''

def to_minute(time):
    h, m = map(int, time.split(':'))
    return 60 * h + m

def solution(plans):
    answer = []
    stack = []
    
    plans = [[name, to_minute(start), int(playtime)] for name, start, playtime in plans]
    plans.sort(key=lambda x:x[1])
    
    for i in range(len(plans) - 1):
        name, start, playtime = plans[i]
        next_start = plans[i + 1][1]
        gap = next_start - start
        
        #과제 끝낼 수 있으면
        if playtime <= gap:
            answer.append(name)
            gap -= playtime
            
            #남은 시간동안 멈춰둔 과제 처리
            while gap > 0 and stack:
                prev_name, remain = stack.pop()
                
                if remain <= gap:
                    answer.append(prev_name)
                    gap -= remain
                else:
                    stack.append([prev_name, remain - gap])
                    gap = 0
        #과제 못끝내면            
        else:
            stack.append([name, playtime - gap])
    
    answer.append(plans[-1][0])
    
    while stack:
        answer.append(stack.pop()[0])
    
    return answer
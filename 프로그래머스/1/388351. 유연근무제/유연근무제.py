'''
1. 시간 -> 분 계산 함수
'''

def to_minute(time):
    hour = time // 100
    minute = time % 100
    return hour * 60 + minute
    
def solution(schedules, timelogs, startday):
    answer = 0
    
    for i in range(len(schedules)):
        limit = to_minute(schedules[i]) + 10
        isSafe = True
        
        for j in range(7):
            day = (startday + j - 1) % 7 + 1

            if day == 6 or day == 7:
                continue
            
            if to_minute(timelogs[i][j]) > limit:
                isSafe = False
                break
        
        if isSafe:
            answer += 1
                    
    return answer
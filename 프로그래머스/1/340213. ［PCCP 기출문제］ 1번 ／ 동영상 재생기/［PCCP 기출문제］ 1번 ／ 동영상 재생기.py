def parseSecond(time):
    minute, second = map(int, time.split(':'))
    totalSec = minute * 60 + second
    return totalSec

def calculate(time, video_second, command):
    if command == 'next':
        if video_second - time < 10:
            time = video_second
        else:
            time += 10
    else:
        if time < 10:
            time = 0
        else:
            time -= 10
    
    return time

def skip(start, end, time):    
    if time >= start and time < end:
        return end
    
    return time

def formatTime(second):
    minute = second // 60
    second = second % 60
    return f"{minute:02d}:{second:02d}"
    
def solution(video_len, pos, op_start, op_end, commands):
    video_second = parseSecond(video_len)
    time = parseSecond(pos)
    op_start = parseSecond(op_start)
    op_end = parseSecond(op_end)
    
    time = skip(op_start, op_end, time)
    
    for command in commands:
        time = calculate(time, video_second, command)
        time = skip(op_start, op_end, time)
    
    return formatTime(time)
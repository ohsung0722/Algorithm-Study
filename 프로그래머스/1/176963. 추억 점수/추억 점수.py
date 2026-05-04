def solution(name, yearning, photo):
    answer = []
    
    point = {}
    for i in range(len(name)):
        point[name[i]] = yearning[i]
    
    for people in photo:
        yearning_answer = 0
        for person in people:
            yearning_answer += point.get(person, 0)
        
        answer.append(yearning_answer)
        
    return answer
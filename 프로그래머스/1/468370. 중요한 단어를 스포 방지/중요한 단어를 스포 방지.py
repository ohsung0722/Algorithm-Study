'''
전체 프로세스

1. 단어의 시작과 끝 인덱스 구하기 (start, end)
2. 스포 구간과 해당 단어가 겹치는지 확인
    1. 겹치면 스포 방지 단어
    2. 안겹치면 일반 구간 단어
3. 스포 단어 중
    1. 일반 단어와 겹치는지 확인
    2. 이전에 나온 스포 방지 단어인지 확인 (set())
4. 최종 결과 return
'''

def solution(message, spoiler_ranges):
    
    # 단어 인덱스 구하기
    words = []
    i = 0
    
    while i < len(message):
        if message[i] == ' ':
            i += 1
            continue
            
        start = i
        while i < len(message) and message[i] != ' ':
            i += 1
        end = i - 1
        
        word = message[start: end + 1]
        words.append((start, end, word))
    
    normal_word = set()
    spoiler_words = [[] for _ in range(len(spoiler_ranges))]
    
    # 각 단어가 스포 구간과 겹치는지 확인
    for start, end, word in words:
        spoiler_index = 0
        
        first = -1
        last = -1
        for spoiler in spoiler_ranges:
            a, b = spoiler
            
            if b < start:
                continue
            if a > end:
                break
        
            if first == -1:
                first = spoiler_index
            last = spoiler_index
            spoiler_index += 1
        
        if first == -1:
            normal_word.add(word)
        else:
            spoiler_words[last].append(word)
    
    # 중요한 단어 판별
    important_word = set()
    
    for spoiler_word in spoiler_words:
        for word in spoiler_word:
            if word not in normal_word:
                important_word.add(word)
    
    return len(important_word)
        
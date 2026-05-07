'''
total < k -> 오른쪽으로 (right 하나씩 늘리기)
total > k -> 왼쪽으로 (left 하나씩 줄이기)
total == k -> 길이 적은쪽
'''

def solution(sequence, k):
    left = 0
    total = 0
    
    answer = [0, len(sequence) - 1]
    min_len = len(sequence)
    
    for right in range(len(sequence)):
        total += sequence[right]
        
        while total > k:
            total -= sequence[left]
            left += 1
        
        if total == k:
            if right - left < min_len:
                min_len = right - left
                answer = [left, right]
            
        
    return answer
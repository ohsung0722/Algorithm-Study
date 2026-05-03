def solution(wallet, bill):
    answer = 0
    w_width = wallet[0]
    w_height = wallet[1]
    
    b_width = bill[0]
    b_height = bill[1]
    
    while True:
        w_smaller = min(w_width, w_height)
        b_smaller = min(b_width, b_height)
        
        w_bigger = max(w_width, w_height)
        b_bigger = max(b_width, b_height)
        
        if w_smaller >= b_smaller and w_bigger >= b_bigger:
            break
        
        if b_width > b_height:
            b_width = b_width // 2
        else:
            b_height = b_height // 2
        
        answer += 1
        
        
    return answer
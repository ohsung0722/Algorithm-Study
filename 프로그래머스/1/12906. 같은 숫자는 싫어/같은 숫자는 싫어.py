def solution(arr):
    
    slow = 1
    
    for fast in range(1, len(arr)):
        if arr[fast] != arr[slow - 1]:
            arr[slow] = arr[fast]
            slow += 1
    return arr[:slow]
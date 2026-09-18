def solution(nums):
    count = {}
    length = len(nums)
    max_num = 0
    
    for num in nums:
        count[num] = count.get(num, 0) + 1
    
    if len(count) > length // 2:
        max_num = length // 2
    else:
        max_num = len(count)
    
    return max_num
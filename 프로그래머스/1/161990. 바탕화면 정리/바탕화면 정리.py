'''
모든 점들의 x, y값의 최대값과 최소값 찾기
'''
def solution(wallpaper):
    min_x = 51
    min_y = 51
    max_x = -1
    max_y = -1
    
    for i in range(len(wallpaper)):
        for j in range(len(wallpaper[i])):
            if wallpaper[i][j] == '#':
                min_x = min(min_x, i)
                min_y = min(min_y, j)
                max_x = max(max_x, i)
                max_y = max(max_y, j)
    
    return [min_x, min_y, max_x + 1, max_y + 1]
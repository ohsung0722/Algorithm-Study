import sys
input = sys.stdin.readline

n = int(input())
tree = {}
for _ in range(n):
    root, left, right = input().split()
    tree[root] = [left, right]

def preorder(node):
    if node == '.':
        return
    
    left = tree[node][0]
    right = tree[node][1]

    print(node, end = '')
    preorder(left)
    preorder(right)

def inorder(node):
    if node == '.':
        return
    
    left = tree[node][0]
    right = tree[node][1]

    inorder(left)
    print(node, end = '')
    inorder(right)

def outorder(node):
    if node == '.':
        return
    
    left = tree[node][0]
    right = tree[node][1]

    outorder(left)
    outorder(right)
    print(node, end='')

preorder('A')
print()
inorder('A')
print()
outorder('A')

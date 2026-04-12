import heapq
import sys
input = sys.stdin.readline

v, e = map(int, input().split())
k = int(input())

graph = [[] for _ in range(v + 1)]
for _ in range(e):
    a, b, c = map(int, input().split())
    graph[a].append((b, c))

INF = int(1e9)
distance = [INF] * (v + 1)


def dijkstra(start):
    pq =[]
    heapq.heappush(pq, (0, start))
    distance[start] = 0

    while pq:
        dist, node = heapq.heappop(pq)

        if dist > distance[node]:
            continue

        for next_node, cost in graph[node]:
            new_dist = dist + cost

            if new_dist < distance[next_node]:
                distance[next_node] = new_dist
                heapq.heappush(pq, (new_dist, next_node))

dijkstra(k)

for i in range(1, v + 1):
    if distance[i] == INF:
        print('INF')
    else:
        print(distance[i])
# Graph - Deep Notes (Hinglish)

# Graph Kya Hota Hai?

Graph = Nodes + Edges

Visual:

```text
1 ----- 2
|       |
|       |
3 ----- 4
```

Yahan:

Nodes:

```text
1
2
3
4
```

Edges:

```text
1-2
1-3
2-4
3-4
```

---

# Sabse Important Realization

Tree bhi:

```text
Nodes + Edges
```

hota hai.

Graph bhi:

```text
Nodes + Edges
```

hota hai.

Difference:

Tree:

```text
Cycle nahi hoti
```

Graph:

```text
Cycle ho sakti hai
```

---

# Graph Ki Vocabulary

## Vertex / Node

Same cheez.

```text
1
2
3
4
```

Ye nodes hain.

---

## Edge

Connection line.

```text
1 ----- 2
```

Ye edge hai.

---

# Undirected Graph

Direction nahi hoti.

```text
1 ----- 2
```

Matlab:

```text
1 se 2
2 se 1
```

Dono taraf ja sakte ho.

---

# Directed Graph

Direction hoti hai.

```text
1 -----> 2
```

Matlab:

```text
1 se 2
```

Allowed.

```text
2 se 1
```

Allowed nahi.

---

# Cycle Kya Hoti Hai?

Cycle matlab:

Start kiya.

Aur ghoom kar wahi pahunch gaye.

Example:

```text
1 ----- 2
|       |
|       |
3 -------
```

Path:

```text
1
↓
2
↓
3
↓
1
```

Wapas aa gaye.

Cycle.

---

# Tree vs Graph

Tree:

```text
      1
     / \
    2   3
```

Cycle nahi.

---

Graph:

```text
1 ----- 2
|       |
|       |
3 -------
```

Cycle hai.

---

# Connected Graph

```text
1 ----- 2
|       |
|       |
3 ----- 4
```

Har node kisi na kisi path se reachable hai.

---

# Disconnected Graph

```text
1 ----- 2


3 ----- 4
```

Do alag groups.

---

# Connected Components

Graph:

```text
1 ----- 2


3 ----- 4
```

Components:

```text
Component 1
1,2

Component 2
3,4
```

Total:

```text
2 Components
```

---

# Graph Store Kaise Karte Hain?

2 Famous Methods.

---

# 1. Adjacency List

Sabse important.

Graph:

```text
1 ----- 2
|       |
|       |
3 ----- 4
```

Store:

```python
graph = {
    1:[2,3],
    2:[1,4],
    3:[1,4],
    4:[2,3]
}
```

Meaning:

```python
graph[1]
```

Output:

```python
[2,3]
```

Node 1 ke neighbors.

---

# Neighbor Kya Hota Hai?

Graph:

```text
1 ----- 2
|
|
3
```

Node 1 ke neighbors:

```text
2
3
```

---

# 2. Adjacency Matrix

Graph:

```text
1 ----- 2
|       |
|       |
3 ----- 4
```

Matrix:

```text
      1 2 3 4
    ---------
1 |   0 1 1 0
2 |   1 0 0 1
3 |   1 0 0 1
4 |   0 1 1 0
```

Rule:

```text
1 = Connection Hai

0 = Connection Nahi
```

---

# Matrix Reading

Example:

```text
matrix[1][3]
```

Value:

```text
1
```

Meaning:

```text
1 connected to 3
```

---

Example:

```text
matrix[1][4]
```

Value:

```text
0
```

Meaning:

```text
1 not connected to 4
```

---

# Grid and Graph Relation

Grid:

```text
1 1
1 0
```

Coordinates:

```text
(0,0) (0,1)
(1,0) (1,1)
```

Hidden Graph:

```text
(0,0) ---- (0,1)
   |
   |
(1,0)
```

Important:

```text
DFS/BFS grid ko graph maan kar chalti hain.
```

Ye tum already samajh chuke ho.

---

# Graph Traversal Kya Hota Hai?

Traversal:

```text
Graph ke saare nodes visit karna.
```

Example:

```text
1 ----- 2
|
|
3
```

Visit:

```text
1
2
3
```

---

# DFS Kahan Aata Hai?

Graph:

```text
1
|
2
|
3
```

DFS:

```text
1
↓
2
↓
3
```

Idea:

```text
Andar ghuso.
```

Uses:

```text
Stack
Recursion
```

---

# BFS Kahan Aata Hai?

Graph:

```text
      1
     / \
    2   3
```

BFS:

```text
1
2 3
```

Idea:

```text
Level by Level
```

Uses:

```text
Queue
```

---

# DFS vs BFS

DFS:

```text
Depth First Search
```

Pattern:

```text
1
↓
2
↓
3
```

Andar ghuso.

---

BFS:

```text
Breadth First Search
```

Pattern:

```text
1

2 3

4 5
```

Level wise.

---

# Why Visited Set Chahiye?

Graph:

```text
1 ----- 2
|       |
|       |
3 -------
```

Cycle hai.

Agar visited nahi rakhenge:

```text
1
↓
2
↓
3
↓
1
↓
2
↓
3
```

Infinite loop.

---

Isliye:

```python
visited = set()
```

use karte hain.

---

# Most Important Graph Thinking

Array:

```text
Index Based
```

---

Linked List:

```text
Next Pointer Based
```

---

Tree:

```text
Parent Child Based
```

---

Graph:

```text
Neighbor Based
```

Graph me hamesha pucho:

```text
Current Node ke Neighbors Kaun Hain?
```

Yehi DFS/BFS ka core hai.

---

# DSA Roadmap Till Now

Array
↓
Linked List
↓
Stack
↓
Queue
↓
Recursion
↓
Tree
↓
Graph

Next:

```text
DFS Deep Notes
↓
BFS Deep Notes
↓
Grid DFS
↓
Grid BFS
```

---

# Final Formula

```text
Tree = Special Graph

DFS = Graph Traversal Using Stack/Recursion

BFS = Graph Traversal Using Queue

Grid Problems = Hidden Graph Problems
```

Ye 4 lines Graph chapter ka essence hain.

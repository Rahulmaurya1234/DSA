# BFS (Breadth First Search) - Deep Notes (Hinglish)

# BFS Kya Hota Hai?

BFS =

```text id="3f0r6s"
Breadth First Search
```

Meaning:

```text id="q8h3wr"
Level by Level Visit Karna
```

DFS bolta hai:

```text id="d6m2kv"
Andar Ghuso
```

BFS bolta hai:

```text id="f7t4ny"
Pehle Mere Saare Neighbors
```

---

# Sabse Simple Example

Graph:

```text id="2x8zpq"
      1
     / \
    2   3
```

DFS:

```text id="j7m4rx"
1
2
3
```

(andar ghus gaya)

---

BFS:

```text id="g4n8yk"
1

2 3
```

(Level wise)

---

# BFS Ka Main Idea

Current node:

```text id="0z3fwp"
1
```

Question:

```text id="h8q4mv"
Mere direct neighbors kaun hain?
```

Answer:

```text id="5r7kdn"
2
3
```

Pehle unko process karo.

Fir unke neighbors.

---

# Queue Kyu Chahiye?

Tumne pehle padha:

```text id="f5m2xq"
Queue = FIFO
```

Meaning:

```text id="t6k4yn"
Jo pehle aaya
Wo pehle niklega
```

BFS isi rule par chalta hai.

---

# Graph Example

```text id="k7w3rz"
        1
      /   \
     2     3
    / \   / \
   4  5  6  7
```

Levels:

```text id="a2m8vd"
Level 0 -> 1

Level 1 -> 2,3

Level 2 -> 4,5,6,7
```

---

# BFS Output

```text id="v9q5rt"
1

2 3

4 5 6 7
```

Observe:

```text id="z6f2wn"
Level by Level
```

---

# BFS Skeleton

```python id="w4m7kd"
from collections import deque

queue = deque([start])

visited = set([start])

while queue:

    node = queue.popleft()

    print(node)

    for nei in graph[node]:

        if nei not in visited:

            visited.add(nei)

            queue.append(nei)
```

Ye BFS ka heart hai.

---

# Line By Line

## Step 1

```python id="c8t3yr"
queue = deque([start])
```

Start node queue me daalo.

---

## Step 2

```python id="z7m5wp"
visited = {start}
```

Mark visited.

Cycle se bachne ke liye.

---

## Step 3

```python id="h4x9nv"
node = queue.popleft()
```

Queue ke front se nikalo.

FIFO.

---

## Step 4

```python id="r5w8kq"
for nei in graph[node]
```

Neighbors dekho.

---

## Step 5

```python id="q9t2mf"
queue.append(nei)
```

Queue me add karo.

Baad me process honge.

---

# Full Trace

Graph:

```text id="m7v4zp"
      1
     / \
    2   3
```

Store:

```python id="u3f8xn"
graph = {
    1:[2,3],
    2:[1],
    3:[1]
}
```

---

Start:

```python id="x6r2ky"
queue = [1]
```

Visited:

```text id="y8q4vn"
{1}
```

---

Pop:

```text id="h2m7df"
1
```

Output:

```text id="d5t8qw"
1
```

Neighbors:

```text id="e9w3kp"
2
3
```

Queue:

```text id="n4x7mz"
[2,3]
```

Visited:

```text id="a6r5yt"
{1,2,3}
```

---

Pop:

```text id="s3m8vd"
2
```

Output:

```text id="r7w2fq"
1 2
```

Queue:

```text id="p8y4kn"
[3]
```

---

Pop:

```text id="j5t9wx"
3
```

Output:

```text id="k2m7rv"
1 2 3
```

Queue:

```text id="v4q8ny"
[]
```

Done.

---

# Queue Visualization

Start:

```text id="n7x3wd"
Front

[1]

Rear
```

---

Process 1

Add:

```text id="u8m5vq"
2
3
```

Queue:

```text id="e6r4zn"
Front

[2,3]

Rear
```

---

Process 2

Queue:

```text id="f9t2wk"
Front

[3]

Rear
```

---

Process 3

Queue:

```text id="m5w8ry"
[]
```

Finished.

---

# DFS vs BFS

Same Tree:

```text id="x3v7qp"
        1
      /   \
     2     3
    / \   / \
   4  5  6  7
```

---

DFS:

```text id="z4m8tv"
1
2
4
5
3
6
7
```

Pattern:

```text id="d8q2wk"
Andar Ghuso
```

---

BFS:

```text id="j6v4rn"
1
2 3
4 5 6 7
```

Pattern:

```text id="a5w7ky"
Level Wise
```

---

# DFS vs BFS Memory Trick

DFS:

```text id="k8t3vq"
Jungle Me Ek Rasta Pakad Lo
```

Andar.

---

BFS:

```text id="n2w7rd"
Pehle Saare Ghar Ek Line Me Dekho
```

Level wise.

---

# BFS In Grid

Grid:

```text id="q5r8vn"
1 1
1 0
```

Start:

```text id="m9w4kp"
(0,0)
```

Neighbors:

```text id="t7v3ry"
(0,1)

(1,0)
```

Queue:

```text id="h8m2wd"
[(0,1),(1,0)]
```

Pehle:

```text id="e4r7vz"
(0,1)
```

Process.

Fir:

```text id="k6w8tn"
(1,0)
```

Process.

Level wise.

---

# BFS Kab Use Karte Hain?

### Shortest Path

Sabse important.

Question:

```text id="x9r4wk"
Minimum steps?
```

Answer:

```text id="z7m2vq"
BFS
```

---

### Rotten Oranges

Grid Problem.

---

### Level Order Traversal

Tree Problem.

---

### Minimum Moves

Maze Type Problems.

---

# Why BFS Gives Shortest Path?

Kyuki:

```text id="w4v8ry"
Pehle 1 step wale nodes
Fir 2 step wale
Fir 3 step wale
```

visit karta hai.

Isliye pehli baar destination mila:

```text id="t3m6wn"
Shortest Path Mil Gaya
```

---

# DFS vs BFS Final

DFS:

```text id="h5w2rk"
Recursion
Stack
Depth
```

---

BFS:

```text id="f8v4mq"
Queue
Level
Shortest Path
```

---

# Most Important Formula

DFS:

```text id="y7r5vk"
Current Node
↓
Neighbor
↓
DFS(Neighbor)
```

---

BFS:

```text id="v2m8rd"
Queue
↓
Pop Front
↓
Add Neighbors
```

---

# Golden Rule

Agar question me dikhe:

```text id="a6w3ty"
Shortest Path
```

ya

```text id="j4r8vn"
Minimum Steps
```

ya

```text id="k9m2wd"
Level Order
```

Socho:

```text id="p7v4rq"
BFS
```

---

# Final Formula

```text id="d3w7tk"
DFS
=
Stack
=
Recursion
=
Andar Ghuso

BFS
=
Queue
=
Level Wise
=
Shortest Path
```

Ye yaad ho gaya to DFS/BFS ka foundation complete ho gaya.

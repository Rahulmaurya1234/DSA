# DFS (Depth First Search) - Deep Notes (Hinglish)

# DFS Kya Hota Hai?

DFS =

```text id="g7m1we"
Depth First Search
```

Meaning:

```text id="4s5x8k"
Pehle andar ghuso
Fir wapas aao
```

---

# DFS Ka Main Idea

Graph:

```text id="x2l8qv"
1
|
2
|
3
```

DFS:

```text id="4q9zxr"
1
↓
2
↓
3
```

Jitna andar ja sakte ho jao.

---

# DFS Kyu Possible Hai?

Kyuki tumne pehle hi padha:

```text id="j6w4tn"
Recursion
+
Stack
```

DFS internally wahi use karta hai.

---

# Graph Example

```text id="hh9x9w"
      1
     / \
    2   3
```

Adjacency List:

```python id="z8tmcn"
graph = {
    1:[2,3],
    2:[1],
    3:[1]
}
```

---

# DFS Traversal

Start:

```text id="m7f8ow"
1
```

Pehla neighbor:

```text id="gxv4wa"
2
```

Visit:

```text id="6v1t5s"
1
↓
2
```

2 ke paas naya neighbor nahi.

Wapas.

Fir:

```text id="f5k3pw"
3
```

Visit:

```text id="9h2zrr"
1
↓
3
```

Output:

```text id="q9x6kg"
1
2
3
```

---

# Sabse Important Visualization

DFS:

```text id="wn5l8z"
1
↓
2
↑
1
↓
3
```

Observe:

```text id="jj3tx7"
Andar gaya

Wapas aaya

Fir next path gaya
```

Exactly recursion.

---

# DFS Ka Skeleton

```python id="p5d3gw"
visited = set()

def dfs(node):

    if node in visited:
        return

    visited.add(node)

    print(node)

    for nei in graph[node]:
        dfs(nei)
```

Bas.

Yehi DFS ka heart hai.

---

# Line By Line

## Step 1

```python id="g3k5rv"
if node in visited:
    return
```

Question:

```text id="h1z4vs"
Ye kyu?
```

Cycle ki wajah se.

---

Graph:

```text id="n8s7bd"
1 ----- 2
|       |
|       |
3 -------
```

Agar visited nahi rakhenge:

```text id="a3r7jk"
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

```python id="q5r7na"
visited
```

must hai.

---

# Step 2

```python id="d6v2mk"
visited.add(node)
```

Mark:

```text id="0z4yt7"
Ye node visit ho chuka hai.
```

---

# Step 3

```python id="v5w7kr"
print(node)
```

Current node process karo.

---

# Step 4

```python id="n4h2zs"
for nei in graph[node]:
```

Meaning:

```text id="x8m5fj"
Current node ke neighbors dekho.
```

---

# Step 5

```python id="m8t7cw"
dfs(nei)
```

Sabse important line.

Ye recursion hai.

---

# Full Trace

Graph:

```text id="k9p4qd"
1
|
2
|
3
```

Store:

```python id="v6s3jt"
graph = {
    1:[2],
    2:[1,3],
    3:[2]
}
```

---

Call:

```python id="u8n4yl"
dfs(1)
```

---

Current:

```text id="9g5rks"
visited = {}
```

---

Visit:

```text id="d3w8xp"
1
```

Now:

```text id="l7h2qf"
visited = {1}
```

Output:

```text id="q4x9tv"
1
```

---

Neighbor:

```text id="o2z5nb"
2
```

Call:

```python id="w7p6cx"
dfs(2)
```

---

Visit:

```text id="7v3mqa"
2
```

Now:

```text id="9f8lrd"
visited = {1,2}
```

Output:

```text id="c6t4kw"
1
2
```

---

Neighbors:

```text id="v1s7dn"
1
3
```

---

First:

```python id="w3n9hr"
dfs(1)
```

Already visited.

Return.

---

Second:

```python id="z6r8kg"
dfs(3)
```

Visit:

```text id="f4h2qc"
3
```

Output:

```text id="x7m5pv"
1
2
3
```

Done.

---

# Going Down and Coming Back

Exactly recursion.

Going Down:

```text id="r5d8wn"
dfs(1)
 ↓
dfs(2)
 ↓
dfs(3)
```

Coming Back:

```text id="v8n2ys"
dfs(3) return
 ↑
dfs(2) return
 ↑
dfs(1) return
```

---

# Stack View

While running:

```text id="w2k7mq"
Top

dfs(3)
dfs(2)
dfs(1)
```

---

Return:

```text id="k6z4df"
dfs(3) pop
dfs(2) pop
dfs(1) pop
```

DFS:

```text id="g3w9ht"
Stack Behavior
```

follow karta hai.

---

# DFS In Tree

Tree:

```text id="a4m7rx"
        1
       / \
      2   3
     / \
    4   5
```

DFS:

```text id="u8h5yc"
1
↓
2
↓
4
↑
2
↓
5
↑
1
↓
3
```

Andar ghuso.

Wapas aao.

---

# DFS In Grid

Grid:

```text id="q9z3wk"
1 1
1 0
```

Coordinates:

```text id="c7n5dx"
(0,0)
(0,1)
(1,0)
```

DFS:

```text id="x4m8pf"
(0,0)
 ↓
(0,1)

Wapas

 ↓

(1,0)
```

Grid ko graph maan kar DFS chalta hai.

---

# DFS Kab Use Karte Hain?

### Connected Components

```text id="j5r2nv"
Kitne groups hain?
```

---

### Number of Islands

```text id="m6w8ks"
Grid problem
```

---

### Flood Fill

Paint Bucket Problem.

---

### Path Exists?

```text id="a7x4pt"
A se B tak pahunch sakte hain?
```

---

# DFS Thinking Pattern

Current Node:

```text id="z3h7rm"
Main yahan hu.
```

Question:

```text id="t5v8qy"
Mere neighbors kaun hain?
```

Fir:

```text id="x1n6df"
Har neighbor par DFS
```

---

# Most Important Formula

DFS me hamesha:

```python id="h4k2sw"
visited.add(node)

for nei in graph[node]:
    dfs(nei)
```

dikhega.

---

# DFS = Recursion + Graph

Tumne pehle padha:

```text id="f6p3qw"
Recursion
```

Aur:

```text id="d8r4na"
Graph
```

DFS:

```text id="v7y5ms"
Recursion
+
Graph
=
DFS
```

---

# Golden Rule

DFS dekhte hi socho:

```text id="m2x8zr"
Current Node
      ↓
Neighbors
      ↓
DFS(neighbor)
```

Aur:

```text id="f9w3kt"
Going Down
+
Coming Back
```

Yahi DFS ka pura game hai.

---

# Final Formula

```text id="e3r7vy"
DFS
=
Depth First Search

=
Andar Ghuso

=
Recursion

=
Stack

=
Visited Set

=
Neighbor Traversal
```

Agar ye samajh aa gaya to DFS clear hai.

Next Topic:

```text id="j6t4pq"
BFS (Breadth First Search)
```

jahan recursion nahi,
balki Queue king hoti hai.

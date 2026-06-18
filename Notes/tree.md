# Tree - Deep Notes (Hinglish)

# Tree Kya Hota Hai?

Tree ek non-linear data structure hai.

Visual:

```text id="j8m8n9"
        1
       / \
      2   3
     / \
    4   5
```

Is structure ko Tree bolte hain.

---

# Tree Kyu Bana?

Linked List:

```text id="v5f5wd"
10 -> 20 -> 30 -> 40
```

Problem:

```text id="i7k4q4"
Sirf ek direction me grow karti hai.
```

---

Tree:

```text id="3r8e6m"
        1
       / \
      2   3
     / \
    4   5
```

Ek node ke multiple children ho sakte hain.

---

# Sabse Important Term

## Node

Tree ka har circle/number ek node hota hai.

```text id="4w3dpa"
        1
       / \
      2   3
```

Nodes:

```text id="gq2f8m"
1
2
3
```

---

# Root Node

Sabse upar wala node.

```text id="g5k7dq"
        1
```

Yahan:

```text id="z8p9hy"
1 = Root
```

Har tree ka ek root hota hai.

---

# Parent and Child

```text id="snqf8u"
        1
       / \
      2   3
```

Yahan:

```text id="j2x1ae"
1 = Parent

2 = Child
3 = Child
```

---

Example:

```text id="v3u3wo"
        1
       / \
      2   3
     /
    4
```

Yahan:

```text id="n4zj7j"
2 = Parent of 4

4 = Child of 2
```

---

# Sibling

Same parent ke children.

```text id="l8v0n4"
        1
       / \
      2   3
```

Yahan:

```text id="f6v4po"
2 and 3 = Siblings
```

---

# Leaf Node

Jiske niche koi child nahi.

```text id="f9j7kd"
        1
       / \
      2   3
     / \
    4   5
```

Leaf Nodes:

```text id="b8s5yq"
4
5
3
```

---

# Edge

Connection line.

```text id="vr5x6x"
1 ----- 2
```

Ye edge hai.

Tree:

```text id="cw6qzt"
        1
       / \
      2   3
```

Edges:

```text id="r8k2d5"
1-2
1-3
```

---

# Degree

Kitne children hain.

```text id="f4k3ms"
        1
       / \
      2   3
```

Degree of 1:

```text id="i7v8cf"
2
```

Kyuki 2 children hain.

---

# Level

```text id="1n5yrn"
Level 0 -> 1

Level 1 -> 2,3

Level 2 -> 4,5
```

Visual:

```text id="g0p5mn"
        1        <- Level 0
       / \
      2   3      <- Level 1
     / \
    4   5        <- Level 2
```

---

# Depth

Root se kitni door.

Example:

```text id="w4e8tc"
Depth(1) = 0
Depth(2) = 1
Depth(4) = 2
```

---

# Height

Tree ki maximum depth.

```text id="pfm7i2"
        1
       / \
      2   3
     / \
    4   5
```

Height:

```text id="s3w8lx"
2
```

Kyuki deepest node 2 edges door hai.

---

# Binary Tree

Sabse important Tree.

Rule:

```text id="f0k8xy"
Har node ke max 2 children
```

Visual:

```text id="p9n6dr"
        1
       / \
      2   3
```

---

Allowed:

```text id="y1x9pa"
0 child
1 child
2 child
```

---

Not Allowed:

```text id="d3j2sq"
3 children
```

---

# Perfect Binary Tree

```text id="txr4ol"
        1
       / \
      2   3
     / \ / \
    4 5 6 7
```

Sab levels full.

---

# Complete Binary Tree

Last level ko chhodkar sab levels full.

Nodes left se fill hote hain.

---

# Tree Traversal

Sabse important topic.

Traversal:

```text id="l6p3na"
Tree ke saare nodes visit karna.
```

---

# DFS Tree Me

Tree:

```text id="0w7rqp"
        1
       / \
      2   3
     / \
    4   5
```

DFS:

```text id="9v8m5f"
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

Observe:

```text id="a7e4dr"
Andar ghusna
Aur wapas aana
```

Exactly recursion jaisa.

---

# BFS Tree Me

Same Tree:

```text id="5g9vsa"
        1
       / \
      2   3
     / \
    4   5
```

BFS:

```text id="ud0mzy"
1
2 3
4 5
```

Level by Level.

---

# Recursion Connection

Tree:

```text id="j3m8ws"
        1
       / \
      2   3
```

Recursive Thinking:

```text id="3k2lmn"
Node
 ↓
Left Subtree
 ↓
Right Subtree
```

---

DFS recursion:

```python id="f2v5jr"
dfs(node.left)

dfs(node.right)
```

Isi liye:

```text id="k9v4pa"
Tree aur Recursion best friends hain.
```

---

# Tree As Graph

Important Realization.

Tree actually:

```text id="t5z8my"
Special Graph
```

hai.

Graph:

```text id="q4n7eo"
Nodes + Edges
```

Tree:

```text id="w2f6rx"
Nodes + Edges
```

bhi hai.

Difference:

```text id="v7j9dc"
Tree me cycle nahi hoti.
```

---

Example Tree:

```text id="p6r4qa"
        1
       / \
      2   3
```

Cycle nahi.

---

Example Graph:

```text id="f1n3vb"
1 --- 2
|     |
|     |
3 ----
```

Cycle hai.

---

# Linked List Aur Tree Relation

Linked List:

```text id="s5w2cy"
10 -> 20 -> 30
```

Har node:

```text id="b7n8po"
1 next pointer
```

rakhta hai.

---

Tree:

```text id="h8q4zd"
        1
       / \
      2   3
```

Har node:

```text id="u9v6xe"
Left Child
Right Child
```

rakh sakta hai.

---

# Visualization Trick

Tree ko family tree samjho.

```text id="p0m4kr"
Grandfather
     |
 Father
 /      \
Son1   Son2
```

Parent-Child relation yaad rahega.

---

# Most Important Realization

Tree:

```text id="g5s8yf"
Graph ka simplified version
```

hai.

Aur:

```text id="4w3rzn"
DFS
BFS
Recursion
```

sab Tree par easily samajh aate hain.

Isi liye Graph se pehle Tree padhaya jata hai.

---

# Golden Rules

Tree dekhte hi pucho:

```text id="n6t3pd"
Root Kaun Hai?
```

Fir:

```text id="e8y1hf"
Children Kaun Hain?
```

Fir:

```text id="r2w9lv"
Leaf Nodes Kaun Hain?
```

Fir:

```text id="f4j7pm"
Height Kitni Hai?
```

---

# Final Formula

```text id="v1g6mt"
Linked List
      ↓

Tree
      ↓

Graph
      ↓

DFS/BFS
```

Agar Tree clear ho gaya to Graph aur DFS/BFS bahut aasaan lagne lagenge.

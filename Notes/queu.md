# Queue - Deep Notes (Hinglish)

# Queue Kya Hoti Hai?

Queue ek linear data structure hai.

Rule:

```text
FIFO
```

Meaning:

```text
First In First Out
```

Jo sabse pehle aaya hoga,
wo sabse pehle niklega.

---

# Real Life Example

Ticket Counter

```text
Front

10 -> 20 -> 30 -> 40

Rear
```

Sabse pehle:

```text
10
```

aaya tha.

Sabse pehle wahi niklega.

---

# Queue Ka Golden Rule

Entry:

```text
Rear se
```

Exit:

```text
Front se
```

---

# Important Terms

## Enqueue

Queue me add karna.

Before:

```text
Front

10 -> 20 -> 30

Rear
```

Enqueue:

```text
40
```

After:

```text
Front

10 -> 20 -> 30 -> 40

Rear
```

---

## Dequeue

Front se remove karna.

Before:

```text
10 -> 20 -> 30 -> 40
```

Remove:

```text
10
```

After:

```text
20 -> 30 -> 40
```

---

## Front

Queue ka first element.

```text
10 -> 20 -> 30
```

Front:

```text
10
```

---

## Rear

Queue ka last element.

```text
10 -> 20 -> 30
```

Rear:

```text
30
```

---

# Visualization

```text
Front

10 -> 20 -> 30 -> 40

Rear
```

Entry:

```text
Right Side
```

Exit:

```text
Left Side
```

---

# Queue vs Stack

Stack:

```text
Top

30
20
10
```

Rule:

```text
LIFO
```

Last entered
First removed

---

Queue:

```text
10 -> 20 -> 30
```

Rule:

```text
FIFO
```

First entered
First removed

---

# Easy Trick

Stack:

```text
Plate Stack
```

Queue:

```text
Ticket Line
```

---

# Queue Internally Array Se

Python:

```python
queue = []
```

Add:

```python
queue.append(10)
queue.append(20)
queue.append(30)
```

Result:

```text
10 -> 20 -> 30
```

---

Remove:

```python
queue.pop(0)
```

Remove:

```text
10
```

---

# Better Queue

Python me:

```python
from collections import deque
```

Use karte hain.

Kyuki queue operations fast ho jate hain.

---

# Why Queue Exists?

Kuch problems naturally:

```text
Jo pehle aaya
wo pehle process hoga
```

follow karti hain.

---

# Example: Ticket Counter

Line:

```text
A -> B -> C -> D
```

Serve:

```text
A
```

phir:

```text
B
```

phir:

```text
C
```

Exactly Queue.

---

# Example: Printer

Documents:

```text
Doc1
Doc2
Doc3
```

Print order:

```text
Doc1
Doc2
Doc3
```

First submitted
First printed

---

# Example: Food Delivery Orders

Orders:

```text
Order1
Order2
Order3
```

Process:

```text
Order1
Order2
Order3
```

---

# Queue Operations

Enqueue

```text
Add
```

Dequeue

```text
Remove
```

Front

```text
First Element
```

Rear

```text
Last Element
```

---

# Time Complexity

Enqueue

```text
O(1)
```

Dequeue

```text
O(1)
```

(using proper queue/deque)

Front

```text
O(1)
```

---

# Queue and BFS

Sabse important connection.

Graph:

```text
      1
    /   \
   2     3
```

BFS:

```text
1
↓
2 3
```

Kaise?

Queue.

---

Start:

```text
Queue

[1]
```

---

Remove:

```text
1
```

Add neighbors:

```text
[2,3]
```

---

Remove:

```text
2
```

Queue:

```text
[3]
```

---

Remove:

```text
3
```

Queue:

```text
[]
```

---

Observe

Jo pehle queue me aaya:

```text
2
```

Wo pehle process hua.

Isi wajah se:

```text
BFS = Queue
```

---

# DFS vs BFS

DFS:

```text
Depth First Search
```

Uses:

```text
Stack
Recursion
```

Idea:

```text
Andar ghuste jao
```

---

BFS:

```text
Breadth First Search
```

Uses:

```text
Queue
```

Idea:

```text
Level by Level
```

---

# Visual Difference

Tree:

```text
        1
      /   \
     2     3
    / \   / \
   4  5  6  7
```

DFS:

```text
1
2
4
5
3
6
7
```

Ek branch poori.

---

BFS:

```text
1
2 3
4 5 6 7
```

Level wise.

---

# Queue Thinking Pattern

Queue ka matlab:

```text
Fair Processing
```

Jo pehle aaya:

```text
Pehle process karo
```

---

# Realization

Stack:

```text
Last In First Out
```

Examples:

```text
Undo
Browser Back
DFS
Recursion
```

---

Queue:

```text
First In First Out
```

Examples:

```text
Ticket Line
Printer
Orders
BFS
```

---

# Golden Rule

Agar question me dikhe:

```text
Level by Level
```

ya

```text
Shortest Path
```

ya

```text
Pehle aaya pehle process
```

To socho:

```text
Queue
```

Agar dikhe:

```text
Andar ghuso
```

ya

```text
Backtracking
```

ya

```text
Recursion
```

To socho:

```text
Stack
```

---

# Most Important Formula

```text
DFS = Stack = Recursion

BFS = Queue
```

Ye line yaad ho gayi to DFS/BFS ka foundation strong ho jayega.

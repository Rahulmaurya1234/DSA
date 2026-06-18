# Arrays - Deep Notes (Hinglish)

## Array Kya Hota Hai?

Array ek data structure hai jo multiple values ko ek hi variable ke andar store karta hai.

Example:

```python
arr = [10, 20, 30, 40]
```

Yahan:

```text
Index:  0   1   2   3
Value: 10  20  30  40
```

---

# Real Meaning of Array

Array ka sabse important point:

```text
Elements memory me ek ke baad ek store hote hain.
```

Visual:

```text
+----+----+----+----+
| 10 | 20 | 30 | 40 |
+----+----+----+----+
```

Isko bolte hain:

```text
Contiguous Memory
```

Matlab:

```text
10 ke baad 20
20 ke baad 30
30 ke baad 40
```

Memory me saath-saath rakhe hote hain.

---

# Index Kya Hota Hai?

Index = Position

```python
arr = [10,20,30,40]
```

```text
Index:  0   1   2   3
Value: 10  20  30  40
```

Access:

```python
arr[0]
```

Output:

```python
10
```

---

```python
arr[2]
```

Output:

```python
30
```

---

# Array Ki Sabse Badi Power

Direct Access

```python
arr[3]
```

Computer ko poora array traverse nahi karna padta.

Seedha 40 mil jata hai.

Isko bolte hain:

```text
O(1) Access
```

---

# Length

```python
arr = [10,20,30,40]
```

```python
len(arr)
```

Output:

```python
4
```

---

# Traversal

Traversal matlab array ke saare elements dekhna.

```python
for i in range(len(arr)):
    print(arr[i])
```

Output:

```text
10
20
30
40
```

---

# Direct Traversal

```python
for num in arr:
    print(num)
```

Output:

```text
10
20
30
40
```

---

# Update

```python
arr = [10,20,30]
```

```python
arr[1] = 99
```

Result:

```python
[10,99,30]
```

---

# Insert

End me:

```python
arr.append(40)
```

Result:

```python
[10,20,30,40]
```

---

# Delete

```python
arr.pop()
```

Result:

```python
[10,20,30]
```

---

# Array Ka Visualization

```python
arr = [5,8,2,9]
```

Visual:

```text
        Index

         0    1    2    3
       +----+----+----+----+
Value  | 5  | 8  | 2  | 9  |
       +----+----+----+----+
```

---

# String Aur Array Relation

String:

```python
s = "1234"
```

Convert:

```python
list(s)
```

Output:

```python
['1','2','3','4']
```

Agar integer chahiye:

```python
[int(ch) for ch in s]
```

Output:

```python
[1,2,3,4]
```

---

# 2D Array Kya Hota Hai?

Array ke andar array.

Example:

```python
grid = [
 [1,0,1],
 [1,1,0]
]
```

Visual:

```text
1 0 1
1 1 0
```

---

# Coordinates

```text
(0,0) (0,1) (0,2)
(1,0) (1,1) (1,2)
```

Access:

```python
grid[1][1]
```

Output:

```python
1
```

---

# Rows and Columns

```python
rows = len(grid)
cols = len(grid[0])
```

Example:

```python
grid = [
 [1,0,1],
 [1,1,0]
]
```

```python
rows = 2
cols = 3
```

---

# 2D Traversal

```python
for i in range(rows):
    for j in range(cols):
        print(grid[i][j])
```

Visual:

```text
1
0
1
1
1
0
```

---

# Array vs Linked List

Array:

```text
[10][20][30][40]
```

Memory:

```text
Contiguous
```

Linked List:

```text
10 -> 20 -> 30 -> 40
```

Memory:

```text
Non Contiguous
```

Node kahin bhi ho sakte hain.

---

# DSA Ke Liye Most Important Concepts

Array padhte waqt ye clear hone chahiye:

1. Index
2. Traversal
3. Update
4. Insert
5. Delete
6. String to Array
7. 2D Array
8. Rows and Columns
9. Nested Loops
10. Coordinates (i,j)

Agar ye sab clear hai to:
String → Matrix → Grid → DFS/BFS ka path easy ho jata hai.

---

# Golden Rule

Jab bhi DSA question dekho:

Pehla question:

```text
Data kis form me hai?

Array?
String?
2D Array?
Graph?
Linked List?
```

Agar Array ya Grid hai:

```text
Indexing aur Traversal socho.
```

Ye hi Array chapter ka core hai.

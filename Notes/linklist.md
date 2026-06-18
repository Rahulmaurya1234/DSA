# Linked List - Deep Notes (Hinglish)

# Sabse Pehle Problem Samjho

Array:

```text
[10][20][30][40]
```

Array ki problem:

Agar beech me value insert karni ho:

```text
[10][20][30][40]

25 insert karna hai
```

To:

```text
30 ko shift karo
40 ko shift karo
```

Fir:

```text
[10][20][25][30][40]
```

Extra kaam hua.

Isi problem ko solve karne ke liye Linked List aayi.

---

# Linked List Kya Hoti Hai?

Linked List me har element ko Node bolte hain.

Har Node ke paas:

1. Data
2. Next Node ka Reference

Visual:

```text
[10 | • ] -> [20 | • ] -> [30 | • ] -> [40 | None]
```

Yahan:

```text
10
20
30
40
```

Data hai.

Aur:

```text
•
```

Next node ka address/reference hai.

---

# Head Kya Hota Hai?

Linked List ka start point.

```text
Head
 |
 v

[10|•] -> [20|•] -> [30|•] -> None
```

Head hamesha first node ko point karta hai.

---

# Last Node

Last node:

```text
[30 | None]
```

Yahan:

```text
None
```

Matlab:

```text
Aage koi node nahi hai.
```

List khatam.

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

---

Linked List:

```text
10 -> 20 -> 30 -> 40
```

Memory:

```text
Non Contiguous
```

Nodes kahin bhi ho sakte hain.

Example:

```text
Address 1000 -> [10 | 5000]
Address 5000 -> [20 | 9000]
Address 9000 -> [30 | None]
```

Important:

```text
20 zaroori nahi 10 ke paas stored ho.
```

Connection address se hota hai.

---

# Real Meaning

Linked List:

```text
Data + Next Address
```

Array:

```text
Sirf Data
```

---

# Traversal

Traversal matlab poori list dekhna.

Visual:

```text
Head

10 -> 20 -> 30 -> 40
```

Process:

```text
Start at Head

10
↓
20
↓
30
↓
40
↓
None
```

None mila:

```text
Stop
```

---

# Important Observation

Array:

```python
arr[2]
```

Seedha mil jata hai.

---

Linked List:

```text
Head
 ↓
10
 ↓
20
 ↓
30
```

30 tak pahunchne ke liye:

```text
10
↓
20
↓
30
```

Traverse karna padega.

---

# Why Linked List Exists?

Fast Insert/Delete

Example:

```text
10 -> 20 -> 30
```

25 insert karna:

```text
10 -> 20 -> 25 -> 30
```

Sirf pointers change hue.

Array ki tarah shifting nahi hui.

---

# Singly Linked List

Most basic version.

```text
Head

10 -> 20 -> 30 -> None
```

Har node:

```text
Data
Next
```

rakhta hai.

---

# Doubly Linked List

Har node:

```text
Prev
Data
Next
```

rakhta hai.

Visual:

```text
None <- 10 <-> 20 <-> 30 -> None
```

Benefit:

```text
Aage bhi ja sakte
Peeche bhi ja sakte
```

---

# Circular Linked List

Last node:

```text
None
```

par point nahi karta.

Visual:

```text
10 -> 20 -> 30
^           |
|___________|
```

Last node wapas first node ko point karta hai.

---

# Node Ko Kaise Socho?

Node ko mini object samjho.

Visual:

```text
+--------+--------+
| Data   | Next   |
+--------+--------+
```

Example:

```text
+--------+--------+
|  10    |  Addr  |
+--------+--------+
```

---

# Linked List Ka Flow

```text
Head
 |
 v

10 -> 20 -> 30 -> 40 -> None
```

Traversal:

```text
current = Head

10
↓
20
↓
30
↓
40
↓
None
```

---

# Time Complexity (Basic Understanding)

Access:

```text
Array      = Fast
LinkedList = Slow
```

Kyuki traverse karna padta hai.

---

Insert/Delete:

```text
Array      = Costly
LinkedList = Easy
```

Kyuki pointer change hota hai.

---

# Visualization Trick

Array:

```text
Train ke fixed compartments
```

```text
[10][20][30][40]
```

---

Linked List:

```text
Chain
```

```text
10 -> 20 -> 30 -> 40
```

Ek ring dusri ring se judi hui.

---

# DSA Me Kya Important Hai?

Linked List chapter me ye concepts clear hone chahiye:

1. Node
2. Head
3. Next Pointer
4. Traversal
5. Insert
6. Delete
7. Singly Linked List
8. Doubly Linked List
9. Circular Linked List

---

# Most Important Realization

Array:

```text
Position se access
```

Example:

```text
arr[2]
```

---

Linked List:

```text
Connection se access
```

Example:

```text
Head
 ↓
10
 ↓
20
 ↓
30
```

Pehle 10
fir 20
fir 30

Tab jaake node milega.

Isi wajah se Linked List aur Array fundamentally different data structures hain.

---

# Golden Rule

Agar question me:

```text
Node
Next
Head
```

dikhe

to turant samajh jao:

```text
Linked List Question
```

Agar:

```text
Index
arr[i]
```

dikhe

to:

```text
Array Question
```

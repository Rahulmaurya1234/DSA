# Recursion - Deep Notes (Hinglish)

# Recursion Kya Hota Hai?

Simple Definition:

```text
Function khud ko call kare = Recursion
```

Example:

```python
def fun():
    fun()
```

Ye recursion hai.

Lekin isme problem hai:

```text
Kabhi rukega hi nahi.
```

Isliye recursion me hamesha:

```text
Base Case
```

zaroor hota hai.

---

# Sabse Important Terms

## Base Case

Stop Condition

```python
if n == 0:
    return
```

Matlab:

```text
Yahin ruk jao.
```

---

## Recursive Call

Function khud ko call kare.

```python
fun(n-1)
```

Ye recursive call hai.

---

# Golden Formula

Har recursion me do cheeze hoti hain:

```text
1. Base Case
2. Recursive Call
```

Example:

```python
def fun(n):

    if n == 0:
        return

    fun(n-1)
```

---

# Sabse Famous Example

```python
def fun(n):

    if n == 0:
        return

    print(n)

    fun(n-1)

fun(3)
```

Output:

```text
3
2
1
```

---

# Andar Kya Ho Raha Hai?

Call:

```python
fun(3)
```

Execution:

```text
fun(3)
 ↓
fun(2)
 ↓
fun(1)
 ↓
fun(0)
```

Base Case:

```python
if n == 0:
    return
```

Mil gaya.

Ab recursion ruk gaya.

---

# Going Down

Ye process:

```text
3
↓
2
↓
1
↓
0
```

ko bolte hain:

```text
Going Down
```

ya

```text
Recursive Calls
```

---

# Return Kahan Hota Hai?

Logon ko sabse zyada confusion yahin hota hai.

Example:

```python
def fun(n):

    if n == 0:
        return

    print(n)

    fun(n-1)

    print(n)

fun(3)
```

---

# Step By Step

Going Down:

```text
fun(3)
 ↓
fun(2)
 ↓
fun(1)
 ↓
fun(0)
```

Output:

```text
3
2
1
```

---

Base Case:

```text
fun(0)
```

Return.

---

# Coming Back

Ab:

```text
fun(1)
```

continue karega.

Fir:

```text
print(1)
```

---

Fir:

```text
fun(2)
```

continue karega.

Fir:

```text
print(2)
```

---

Fir:

```text
fun(3)
```

continue karega.

Fir:

```text
print(3)
```

---

Output:

```text
3
2
1
1
2
3
```

---

# Most Important Visualization

Going Down:

```text
3
↓
2
↓
1
↓
0
```

Coming Back:

```text
1
↑
2
↑
3
```

Recursion me hamesha:

```text
Andar Jana
Aur
Wapas Aana
```

hota hai.

---

# Function Calls Kahan Store Hoti Hain?

Answer:

```text
Stack
```

---

# Call Stack

Example:

```python
fun(3)
```

Stack:

```text
Top

fun(3)
```

---

Call:

```python
fun(2)
```

Stack:

```text
Top

fun(2)
fun(3)
```

---

Call:

```python
fun(1)
```

Stack:

```text
Top

fun(1)
fun(2)
fun(3)
```

---

Call:

```python
fun(0)
```

Stack:

```text
Top

fun(0)
fun(1)
fun(2)
fun(3)
```

---

# Base Case Hit

```python
return
```

Stack:

```text
fun(0) remove
```

---

Then:

```text
fun(1) continue
```

---

Then:

```text
fun(2) continue
```

---

Then:

```text
fun(3) continue
```

---

# Real Meaning

Recursion:

```text
Function Calls Stack Me Save Hoti Hain
```

---

# Why Base Case Important Hai?

Without Base Case:

```python
def fun(n):
    fun(n-1)
```

Never stops.

Result:

```text
Stack Overflow
```

Error.

---

# Recursion Thinking

Har recursive problem me ye pucho:

```text
1. Kab rukna hai?
2. Chhoti problem kaunsi hai?
```

---

Example:

```python
fun(5)
```

ko convert karte hain:

```python
fun(4)
```

Fir:

```python
fun(3)
```

Fir:

```python
fun(2)
```

Fir:

```python
fun(1)
```

Fir:

```python
fun(0)
```

Base Case.

---

# Recursion = Trust

Recursion ka golden secret:

```text
Function ko trust karo.
```

Example:

```python
fun(5)
```

Mat socho:

```text
Andar kya ho raha hai?
```

Socho:

```text
fun(4) apna kaam kar lega.
```

Ye recursion ka mindset hai.

---

# Relation With Tree

Recursion ko Tree ki tarah bhi dekh sakte hain.

Example:

```python
fun(3)
```

Visual:

```text
fun(3)
  |
fun(2)
  |
fun(1)
  |
fun(0)
```

Har call ek node hai.

Isi wajah se:

```text
Tree aur Recursion strongly related hain.
```

---

# Relation With DFS

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

Exactly recursion jaisa.

```python
dfs(1)
 ↓
dfs(2)
 ↓
dfs(3)
```

Isi liye:

```text
DFS = Recursion + Stack
```

---

# Common Mistake

Students sochte hain:

```text
Function call hua
To previous function gayab ho gaya.
```

Galat.

Previous function:

```text
Wait kar raha hota hai.
```

Stack me.

---

Example:

```python
print(3)

fun(2)

print(3)
```

Second print tab chalega jab:

```python
fun(2)
```

poora finish ho jayega.

---

# Most Important Realization

Recursion me do phases hote hain:

```text
1. Going Down
2. Coming Back
```

Going Down:

```text
Recursive Calls
```

Coming Back:

```text
Returns
```

Isi process ko samajh liya to:

```text
DFS
Tree Traversal
Backtracking
```

bahut aasaan ho jata hai.

---

# Golden Rule

Recursion dekhte hi pucho:

```text
Base Case Kya Hai?
```

Fir pucho:

```text
Recursive Call Kahan Hai?
```

Agar ye do cheeze mil gayi:

```text
Recursion samajh aa jayegi.
```

---

# Final Formula

```text
Recursion
    =
Base Case
    +
Recursive Call
    +
Call Stack
    +
Going Down
    +
Coming Back
```

Aur sabse important:

```text
DFS = Recursion + Stack
BFS = Queue
```

Ye line yaad ho gayi to aage ka Graph chapter bahut smooth lagega.


# git clone <repo>
    cd repo name 
    code .
    open in vs code
# git init  
# git remote add origin <repo link>
# git add .
# git commit -m "message"
# git push origin master
or 
# git push origin main


1. Fork
      ↓
2. Clone
      ↓
3. Branch banao
      ↓
4. Code change
      ↓
5. git add
      ↓
6. git commit
      ↓
7. git push
      ↓
8. Pull Request
      ↓
9. Maintainer review
      ↓
10. Merge


# Fork ke baad clone
git clone https://github.com/rahul/project.git

# New branch
git checkout -b fix-typo

# Changes save
git add .

git commit -m "Fixed README typo"

git push origin fix-typo

Create Pull Request



# Git & GitHub Notes

## Git kya hai?

Git ek Version Control System (VCS) hai jo code ke changes ko track karta hai.

Benefits:

* Code history save hoti hai
* Purane version par ja sakte ho
* Team ke saath kaam kar sakte ho
* Branches bana sakte ho

---

# Git Setup

```bash
git config --global user.name "Rahul"
git config --global user.email "rahul@example.com"
```

Check:

```bash
git config --list
```

---

# New Repository

```bash
git init
```

---

# File Status

```bash
git status
```

---

# Add Files

Single file:

```bash
git add file.py
```

All files:

```bash
git add .
```

---

# Commit

```bash
git commit -m "Initial commit"
```

Commit = Snapshot of project.

---

# View History

```bash
git log
```

Short form:

```bash
git log --oneline
```

---

# Connect GitHub Repo

```bash
git remote add origin REPO_URL
```

Check:

```bash
git remote -v
```

---

# Push Code

First push:

```bash
git push -u origin main
```

Later:

```bash
git push
```

---

# Pull Latest Code

```bash
git pull origin main
```

---

# Clone Existing Repository

```bash
git clone REPO_URL
```

---

# Branch

Current branch:

```bash
git branch
```

Create branch:

```bash
git branch feature
```

Create and switch:

```bash
git checkout -b feature
```

Switch branch:

```bash
git checkout main
```

---

# Merge Branch

```bash
git checkout main
git merge feature
```

---

# Delete Branch

```bash
git branch -d feature
```

---

# Master vs Main

Old default branch:

```text
master
```

New default branch:

```text
main
```

Rename master to main:

```bash
git branch -M main
```

---

# Fork

Fork = Kisi aur ke repository ki copy apne GitHub account me banana.

Example:

Original Repo
↓
Fork
↓
Your Repo

---

# Pull Request (PR)

PR = Repository owner ko request:

"Please review my changes and merge them."

Workflow:

Fork
→ Clone
→ Branch
→ Code Change
→ Commit
→ Push
→ Pull Request
→ Review
→ Merge

---

# Most Used Commands

```bash
git init
git status
git add .
git commit -m "message"
git push
git pull
git clone URL
git branch
git checkout -b branch-name
git merge branch-name
git log --oneline
```

1. Sabse aasaan: First Contributions

First Contributions

Ye project specifically beginners ko Fork, Branch aur Pull Request sikhane ke liye bana hai. Yahan tumhara pehla PR 100% practical tareeke se ho jayega.

2. Good First Issue

Good First Issue

Yahan jaake:

Language = JavaScript
Language = TypeScript
Language = React

filter lagao.

3. Up For Grabs

Up For Grabs

Yahan projects beginner issues ke saath listed hote hain.

4. Direct GitHub Search

GitHub search mein ye likho:

label:"good first issue" language:JavaScript state:open

ya

label:"good first issue" react state:open
Tumhare liye abhi best plan

Week 1

First Contributions project par 1 PR

Week 2

Kisi README typo/documentation issue par 1 PR

Week 3–4

JavaScript ya React ka small bug fix

Isse tum:

Fork
Branch
Commit
Push
Pull Request

sab real project mein kar loge.
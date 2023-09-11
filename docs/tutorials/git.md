---
sidebar_position: 2
sidebar_label: GIT
---

# GIT

## Git Configuration

### 1. Install Git

```bash
sudo apt-get update 
sudo apt-get install git-all
```

**↳** Check git version:

```bash
git --version
```

### 2. Configure Git

**↳** Username:

```bash
git config --global user.name "name-user"
```

**↳** Email:

```bash
git config --global user.email "user@domain.com"
```

**↳** Editor:

```bash
git config --global core.editor nano
```

**↳** Default branch:

```bash
git config --global init.defaultBranch <new-branch>
```

**↳** Check settings:

```bash
git config --list
```

### 3. Create Directory

```bash
mkdir /home/user/<directory-name>
```

### 4. Initialize Repository

```bash
cd /home/user/<directory-name>
```

```bash
git init
```

```bash
git clone <address/repository>
```

### 5. Run Git

**↳** Check for changes:

```bash
git status
```

**↳** Adding and changing a file:

```bash
git add <file-name>
```

**↳** Add all files:

```bash
git add .
```
**↳** Commit:

```bash
git commit -m "<message>"
```

**↳** Push files to the official repository:

```bash
git push origin <branch-name>
```

**↳** Update local repository with remote:

```bash
git pull <remote-branch> <branch-name>
```

### 6. Branches

**↳** Create new branch:

```bash
git checkout -b <new-branch>
```

**↳** List local branch:

```bash
git branch
```

**↳** List remote branch:

```bash
git branch -r
```

**↳** List all branches:

```bash
git branch -a
```

**↳** Delete local branch:

```bash
git branch -d <branch-name> 
```

**↳** Delete remote branch:

```bash
git push origin --d <branch-name>
```




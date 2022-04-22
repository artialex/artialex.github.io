---
tags: [git]
---

# Git

Version Control System. Looks simple but under the hood there are a lot of nuances and non-obvious things

It's good and practical to use global `.gitignore` containing entries like

```
.vscode
.idea
```

<!--
## How does git architecture look like?

Core of git is _repository_. Basically it's a key-value storage containig among other things:

- _Blobs_, most basic git type. Just a bunch of bytes, usually it's a binary file representation
- _Tree objects_ similar to directories. Contain pointers to blobs and other tree objects
- _Commit objects_ pointing to the concrete tree object, containing metadata including commit's author and parent commits
- _Tag objects_ pointing to the concrete commit object containing some metadata
- _References_, pointing to the concrete object, usually to commit object or tag object
-->

---

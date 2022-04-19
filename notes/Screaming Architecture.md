---
tags: [architecture]
---

# Screaming architecture

The term "Screaming architecture" means that the file structure "screams" about the architecture of the system, helping to understand into which modules it is divided, and into which layers it is split

Without screaming architecture

```bash
+-- src
    +-- constants  # What is it? System contains of `constants`?
	+-- components # And `components`?
	+-- actions    # Not very helpful...
	...
```

With screaming architecture

```
+-- src
    +-- auth    # Now I know that there is an auth module in the system
	+-- core    # Here is the core
	+-- rtc     # Application has WebRTC layer
	+-- lessons # Very convenient
	...
```

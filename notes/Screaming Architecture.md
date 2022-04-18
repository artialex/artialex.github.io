---
tags: [architecture]
---

# Screaming Architecture

## Without screaming architecture

```
+-- src
    +-- constants
	+-- components
	+-- actions
	...
```

## With screaming architecture

```
+-- src
    +-- auth
	+-- core
	+-- rtc      // Wow, this app uses WebRTC
	+-- lessons  // So one of the app's features are lessons of some sort
	...
```

---



[[Errors vs Exceptions]]
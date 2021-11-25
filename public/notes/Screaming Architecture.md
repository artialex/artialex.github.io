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

- [Screaming Architecture](https://blog.cleancoder.com/uncle-bob/2011/09/30/Screaming-Architecture.html)




[[Errors vs Exceptions]]
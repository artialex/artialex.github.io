---
tags: [architecture, index]
---

# Software Architecture

_Not every system needs an architecture_

## Small picture

Learn well-known abbreviations: DRY, KISS, [[SOLID]], GRASP

[[Package by feature not layer]], define boundaries, pay attention to low coupling & high cohesion, separate code in modules/packages

_Modularity_ lets you define a _public interface_ to hide _private implementation details_

Prefer _composition and/or aggregation_ to inheritance

Use _patterns_ reasonably: event emitter, event bus, observables, state machines, state charts. Design patterns are [missing language features](http://wiki.c2.com/?AreDesignPatternsMissingLanguageFeatures)

## Big picture

Approaching the big picture, learn [Screaming Architecture](https://blog.cleancoder.com/uncle-bob/2011/09/30/Screaming-Architecture.html), [[Clean Architecture]], and [[Notes on DDD]]

Treat applications like big functions, containerize them, write [[12-factor application|12-factor applications]]

Keeping the architecture in one's head can be tedious, use PlantUML and [C4 Model](https://c4model.com/) for visualizations

Be wary of [Conway's Law](https://en.wikipedia.org/wiki/Conway%27s_law)

---

- [The Architecture of Open Source Applications](https://aosabook.org/en/index.html)
- [Application Architecture Guide 2.0](https://archive.codeplex.com/?p=AppArchGuide)
- [Архитектура приложений с открытым исходным кодом](http://rus-linux.net/MyLDP/BOOKS/Architecture-Open-Source-Applications/index.html)
- [FPB, Software Architecture](https://github.com/EbookFoundation/free-programming-books/blob/master/free-programming-books.md#software-architecture)

<!--
## Command Query Separation (CQS )
- https://martinfowler.com/bliki/CommandQuerySeparation.html
-->

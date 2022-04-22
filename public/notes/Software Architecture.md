---
tags: [architecture, index]
---

# Software architecture

> Not every system needs an architecture

## Small picture

Learn well-known abbreviations: DRY, KISS, [[SOLID]], GRASP

[[Package by feature not layer]], define boundaries, pay attention to low coupling & high cohesion, separate code in modules/packages

_Modularity_ lets you define a _public interface_ to hide _private implementation details_

Prefer _composition and/or aggregation_ to inheritance

Use _patterns_ reasonably: event emitter, event bus, observables, state machines, state charts. Design patterns are [missing language features](http://wiki.c2.com/?AreDesignPatternsMissingLanguageFeatures)

## Big picture

Approaching the big picture, learn [Screaming Architecture](https://blog.cleancoder.com/uncle-bob/2011/09/30/Screaming-Architecture.html), [[Clean architecture]], and [[Notes on DDD]]

Treat applications like big functions, containerize them, write [[12-factor application|12-factor applications]]

Keeping the architecture in one's head can be tedious, use PlantUML and [C4 Model](https://c4model.com/) for visualizations

Be wary of [Conway's Law](https://en.wikipedia.org/wiki/Conway%27s_law)

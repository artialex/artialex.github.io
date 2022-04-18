---
tags: [done]
---

# Package by feature not layer

One of the most sacred knowledge I obtained in my first year on the job. Every tutorial back then used file structure that contained directories `html`, `css` and `js` (with variations like `styles` and `scripts`) thus having a _layer-as-first-level_ architecture. This is also the structure that most modern frameworks offer by default

First I discovered this article: ["Package by feature, not layer"](http://www.javapractices.com/topic/TopicAction.do?Id=205), and that was my first insight of _module-as-first-level_ architecture

<!-- In short it implies that **it is better to package by feature and not layer** -->

Funnily enough nowadays everybody learned to modularize React components (e. g. keep together `html`, `js` (in form of `jsx`) and `css`), but they still create directories like `reducers`, `actions`, etc...

<!-- Some people think that this approach is a violation of a separation of concern while it's not -->

All the above is especially true for applicaitons of medium (10k-100k LOC) and high (100k+ LOC) complexity

This is one of the most important architectural patterns

<!-- TODO: add frontend approach -->

---

- [Package by feature, not layer](http://www.javapractices.com/topic/TopicAction.do?Id=205)
- [Structuring React and Redux applications](https://blog.sapegin.me/all/react-structure) by Artyom Sapegin
- [Learning Code Readability](https://medium.com/@egonelbre/learning-code-readability-a80e311d3a20)
- [PBF (Package by Feature), no more PBL (Package by Layer)](https://medium.com/mindorks/pbf-package-by-feature-no-more-pbl-package-by-layer-50b8a9d54ae8)
- [[RU] Organizing files by features and not by technical aspects](http://andrew-r.ru/notes/features-not-tech-aspects/) by Andrew Romanov
- [📺 Hexagonal architecture](https://www.youtube.com/watch?v=sOaS83Ir8Ck)

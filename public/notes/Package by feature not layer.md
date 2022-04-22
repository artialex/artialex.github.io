---
tags: [done, pbm]
---

# Package by feature not layer

One of the most sacred knowledge I obtained in my first year on the job. Every tutorial back then used file structure that contained directories `html`, `css` and `js` (with variations like `styles` and `scripts`) thus having a _layer-as-first-level_ architecture. This is also the structure that most modern frameworks offer by default

First I discovered this article: ["Package by feature, not layer"](http://www.javapractices.com/topic/TopicAction.do?Id=205), and that was my first insight of _module-as-first-level_ architecture

Funnily enough nowadays everybody learned to modularize React components (e. g. keep together `html`, `js` (in form of `jsx`) and `css`), but they still create directories like `reducers`, `actions`, etc...

All the above is especially true for applications of medium (10k-100k LOC) and high (100k+ LOC) complexity

This is one of the most important architectural patterns

<!-- TODO: add frontend approach -->

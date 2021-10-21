---
tags: [done]
---

# How I write front-end

## I use TypeScript

All the modern frameworks and server-side JS support TypeScript. I avoid using pure JS

---

## I use [prettier](https://prettier.io/)

I think the experience of writing code in JS/TS (also CSS and Markdown!) could be divided into _"before"_
and _"after"_ inventing `prettier`.

---

## I divide code into modules

<!--
- [[Code organization]]
-->

I use the following code-separation approach: [[Package by feature not layer]]

### I avoid having module like `common`, `utils`, `helpers` etc.

Directories like these (also `shared`, `general` and similar
"put-here-everything" names) don't have a strict and specific purpose and
eventually turn into an unrefactorable trashcan

But it's okay to have directories like `utils` and `constants` _inside_ a module
because this way I know that corresponding utils and constants scoped within a module

---

## I use [C4 Model](https://c4model.com/) for visualizing the system I work on

It's a handy thing to build a mental model of a system context

<!--
## I tend to use low-level libraries
- I prefer `webpack` rather than `next.js`
- I'd rather use React with vanilla library via my own bindings rather than use
-->

<!--
## I use code generation tools

Like [plop](https://plopjs.com/)
I wrote a little lib that helps me to generate modules and components.
It's based on
-->

<!--
- [Requirements for front-end developers](https://livetyping.com/en/blog/requirements-for-front-end-developer)
-->

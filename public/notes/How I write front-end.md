---
tags: [done]
---

# How I write Front-End

## Architecture decisions I prefer

- **I prefer using React** as UI library. Though I worked with other libraries like `vue` and `angular`
- **I prefer using Redux** as State Management library. Though I worked with `effector`
- **I prefer using Next.js** over custom BFFs. Saves a lot of time and matches my thoughts about `/pages` routing approach
- **I split code into [[Package by feature not layer|standalone modules]]**. Some call them _features_.
  - Each module lies inside a `/modules` directory and can have these directories:
    - `/components` contains React components
    - `/contexts` contains state management elements (ducks, stores, etc...)
    - `/services` contains infrastructure elements (API layer, platform layer)
    - `/hooks` contains React hooks and can be an abstraction of any layer
- **I tend to have modules like:**
  - `/core` for core elements of the applicaiton
  - `/analytics` for analytical services
  - `/ui` for ui elements (ui-kit)
  - `/ui.form` for form elements
  - `/platform` for platform specific services (like browser)
- **I avoid having module like `common`, `utils`, `helpers`, etc...**. Directories like these (also `shared`, `general` and similar "put-here-everything" names) don't have a strict and specific purpose and eventually turn into an unrefactorable trashcan. But it's okay to have directories like `utils` and `constants` _inside_ a module because this way I know that corresponding utils and constants scoped within a module

This way structure can look like this

```
- src
	- pages
	- modules
		- core
		- users
			- components
				UserPage.tsx
				AllUsersPage.tsx
			- contexts
				users.ts
			- services
				users.api.ts
```

## Tools I use

- **I use TypeScript**. All the modern frameworks and server-side JS support TypeScript. I avoid using pure JS
- **I use [prettier](https://prettier.io/)**. I think the experience of writing code in JS/TS can be divided into _"before"_ and _"after"_ inventing `prettier`.
- **I use css-modules**. Without BEM naming convention as it becomes unneeded in isolated CSS
- **I use plop** as a code generation tool. It helps me to create modules and components on the fly

## Things I visualize

- **I use [C4 Model](https://c4model.com/)** for visualizing the big picture of the system I work on
- **I use Plantuml** when it's necessary
- **I use madge** when it's helpful

## Testing

- **I use jest** for unit-testing
- **I use cypress** for e2e-testing

---

- [Requirements for front-end developers](https://livetyping.com/en/blog/requirements-for-front-end-developer)

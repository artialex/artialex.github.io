---
tags: [fe, guide]
---

# How I write frontend

## Architectural decisions I prefer

-   **I use React** as UI library. Though I worked with other libraries like `vue` and `angular`
-   **I use Redux** (and Redux Toolkit) as State Management library _when I need_ such a library. I worked with `MobX`, `effector` and with `react-query` and I prefer Redux Toolkit for its wide popularity
-   **I use Next.js** over custom BFFs. Saves a lot of time and matches my thoughts about `/pages` routing approach
-   **I split code into [[Package by feature not layer|standalone modules]]**. Some call them _features_.
    -   Each module lies inside a `/modules` directory and can have these directories:
        -   `/components` contains React components
        -   `/layouts` contains Page layouts (but not pages itself which are located in next's `/pages` directory)
        -   `/hooks` contains React hooks and can be an abstraction of any layer
    -   I put services, slices, APIs in the root of the module
-   **I tend to have modules like:**
    -   `/core` for crucial application elements: redux-store setup, components like _header_ and _footer_
    -   `/analytics` for analytical services
    -   `/ui` for ui elements (ui-kit)
    -   `/ui.form` for form elements
    -   `/platform` for platform specific services (like browser)
    -   `/lang` for custom language extensions (like `lodash`)
-   **I avoid having module like `common`, `utils`, `helpers`, etc...**. Directories like these (also `shared`, `general` and similar "put-here-everything" names) don't have a strict and specific purpose and eventually turn into an unrefactorable trashcan. But it's okay to have directories like `utils` and `constants` _inside_ a module because this way I know that corresponding utils and constants scoped within a module

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
			- layouts
				UserLayout.tsx
			users.slice.ts
			users.service.ts
			users.api.ts
			users.types.ts
```

## Tools I prefer

-   I use [TypeScript](https://www.typescriptlang.org/). All the modern frameworks and server-side JS support TypeScript. I avoid using pure JS except simple scripts
-   I use [Prettier](https://prettier.io/). I think the experience of writing code in JS/TS can be divided into _before_ and _after_ inventing `prettier`.
-   I use [CSS Modules](https://github.com/css-modules/css-modules). Without BEM naming convention as it becomes unneeded in isolated CSS
-   I use [Plop](https://plopjs.com/) as a code generation tool. It helps me to create modules and components on the fly. I even have my own [reusable set of tasks](https://github.com/alextheartisan/tasks)
-   I use [C4 Model](https://c4model.com/) for visualizing the big picture of the system I work on
-   I use PlantUML when it's necessary
-   I use madge when it's helpful
-   [[How I write unit tests|I use Jest]] for unit-testing (with the help of `testing-library`)
-   I use cypress for e2e-testing

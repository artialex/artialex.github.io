---
tags: [guide, wip]
---

# How I name things

Firstly, to avoid bike-shedding I have a [[Common Sense Style Guide]]

## [[Naming variables]]

## Naming files

- use `PascalCase` for React components, services, constructors, etc...
- use `kebab-case` for everything else
- never use `snake_case`

### React components

With supporting files:

```
└── components
    └── Faq                 # Directory
        ├── index.ts        # `export { Faq } from './Faq'`
        ├── Faq.tsx         # Component
        ├── Faq.module.css  # Scoped styles
        ├── FaqControl.tsx  # <Optional> Supporting component
        └── Faq.test.tsx    # <Optional> Component tests
```

Without supporting files:

```
└── components              # Component directory
    └── Button.jsx          # Component without supporting files
```

### Classes, Singletons

Name the file as the name of the class

```
└── modules
    └── user
        ├── ...
        ├── User.js         # `export class User`
        └── UserService.js  # `export default new UserService()`
```

### Redux bundles, Tools

These files usually export multiple functions, so use pseudoextensions indicating the contents of the file

```
└── modules
    └── auth
        ├── index.js
        └── auth.duck.js
    └── tools
        ├── index.js
        ├── currency.tools.js
        └── datetime.tools.js
```

---

- https://github.com/kettanaito/naming-cheatsheet


[[How I name projects]]
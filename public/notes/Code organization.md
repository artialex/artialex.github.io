import { TreeView } from '../../components/TreeView'

import css from './modules.module.css'

# Code Organization

Let's start with the basics. Here is the simplest **Flux architecture** diagram

<iframe
  style={{ border: 'none' }}
  width="800"
  height="450"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FCYeTNMqzM4xnq98cpADab50D%2FStructuring%3Fnode-id%3D48%253A174"
  allowFullScreen
/>

**Components** are our basic UI blocks. They are written using HTML (under the JSX sauce) and CSS.

**Actions** are [_Flux Standard Actions_](https://github.com/redux-utilities/flux-standard-action).
**State** is the only representation of UI in a form of JavaScript object.
Dispatching **Actions** changes **State** via _Reducers_. We also use libraries that help us
create boilerplate like [redux-actions](https://github.com/redux-utilities/redux-actions) for
actions and [immer](https://github.com/immerjs/immer) for reducers

_Layers_ are parts of an _Architecture_ when _Modules_ are parts of an _Application_

Thus again:

<ul className={css.mainThing}>
  <li>
    <b>Architecture</b> contains of <b>Layers</b>
  </li>
  <li>
    <b>Application</b> contains of <b>Modules</b>
  </li>
</ul>

Here is the mental map of it:

<iframe
  style={{ border: 'none' }}
  width="800"
  height="450"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FCYeTNMqzM4xnq98cpADab50D%2FStructuring%3Fnode-id%3D48%253A189"
  allowFullScreen
/>

## Architecture Layers

Starting with the basics, let's recap what the Flux is:

<iframe
  style={{ border: 'none' }}
  width="800"
  height="600"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FCYeTNMqzM4xnq98cpADab50D%2FStructuring%3Fnode-id%3D31%253A235"
  allowFullScreen
/>

There are several layers

### Flux Layer

Includes _components_, [_ducks_](https://github.com/erikras/ducks-modular-redux) and _store_

### UI Layer

Subset of _Flux Layer_. Contains presentation components, React components, CSS

### Middleware Layer

Includes various middleware that connects UI and Business Logic, e. g. [_sagas_](https://redux-saga.js.org/), [_epics_](https://redux-observable.js.org/) or custom ones

### Business Logic Layer

Includes business logic: analytics service, application logic, etc... Modules that heavily use this layer are the core of the application and are often rewritten

_Examples:_

- feature modules
- analytics module

### Data Logic Layer

Includes data logic: data providers, persistence, etc... Modules that use this layer rarely change once written, so they are easy to reuse via npm packages

_Examples:_

- api
- storage
- cache

## Application Modules

- Besos's mandate

When you describe an application you what modules it contains of For instance an will contain Module is a part of an application, like a Lego block is a part of an Lego car

### Structure

<iframe
  style={{ border: 'none' }}
  width="800"
  height="450"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FCYeTNMqzM4xnq98cpADab50D%2FStructuring%3Fnode-id%3D48%253A210"
  allowFullScreen
/>

    └── ui                        # Module directory
        ├── index.js              # Module interface
        └── components            # Module components directory
            ├── Button.jsx        # <Optional> Component without additional files
            └── Faq               # Component directory
                ├── index.js      # Component interface
                ├── Faq.jsx       # Component
                ├── Faq.styl      # Component styles
                └── Faq.test.jsx  # Component tests

## Read more

- [Three Rules For Structuring (Redux) Applications](https://jaysoo.ca/2016/02/28/organizing-redux-application/)

## _TODO_

- _Real World Examples_
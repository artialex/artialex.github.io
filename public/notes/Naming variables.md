---
tags: [wip]
---

# Naming variables

Choosing a right name for a variable is just as important as choosing the right architecture, both lead to quicker diving into the project

**Rule #1:** Avoid overusing name `data`, because it's not explicit what kind of data it contains

- Use grammar checker, it helps to avoid cases like `isMaked`, `isShowed`
- Avoid naming it `list`, `collection`, `entry`, `item` except for general utility functions
- Avoid naming it with one letter, except:
  - `_`, `$` for `lodash`, `jquery`, etc...
  - `x`, `y`, `z` for point coordinates
  - `a`, `b` for `.sort()` parameters

If a variable has an acronym in its name, and this acronym contains two letters use `UPPER_CASE`.
Otherwise, use `PascalCase`.
Note the words `id` and `ok` are not acronyms

| 💚 Good        | 💔 Bad         |
| :------------- | :------------- |
| `getUI`        | `getUi`        |
| `userId`       | `userID`       |
| `processHtml`  | `processHTML`  |
| `ApiService`   | `APIService`   |
| `getVRContext` | `getVrContext` |
| `ResponseOk`   | `ResponseOK`   |

For collections use the most appropriate plural noun. Avoid `<x>List` and `<x>Coll` patterns

| 💚 Good    | 💔 Bad              |
| :--------- | :------------------ |
| `messages` | `msgs`              |
|            | `messageList`       |
|            | `messageColl`       |
|            | `messageCollection` |

Use `<x>Count` pattern for countable

| 💚 Good     | 💔 Bad         |
| :---------- | :------------- |
| `userCount` | `usersCount`   |
|             | `countUser`    |
|             | `userQuantity` |
|             | `userNumber`   |

Use `re` or `re<X>`, patterns for RegExps

| 💚 Good   | 💔 Bad   |
| :-------- | :------- |
| `re`      | `rx`     |
| `reEmail` | `reg`    |
|           | `regex`  |
|           | `rEmail` |

For functions use `<verb><X>` pattern (`<verb>` for general utility functions). Use `set<X>` for a function that sets a boolean variable.

| 💚 Good                                  | 💔 Bad                                  |
| :--------------------------------------- | :-------------------------------------- |
| `getUser()`, `authorizeUser()`           | `user()`                                |
| `formatPrice()`                          | `priceFormat()`                         |
| `handleClick()`                          | `clickHandler()`                        |
| `convertHexToRgb()`, `getRgb()`          | `hexToRgb()`, `toRGB()`, `rgbFromHex()` |
| `convertBirthdateToAge()`                |                                         |
| `ensureDataSaved()`, `saveDataIfNeeded() | `saveDataIfHaveTo()`                    |
| `ensureChecked()`, `checkIfNeeded()`     | `checkIfExistsUnchecked()`              |
| `isManualTemplate()`                     | `checkIfManualTemplate()`               |
| `setVisible()`                           | `setIsVisible()`                        |

For booleans use `<verb><X>` pattern. Should be positive (not reversed like `isNotFound`). Name should be a question that can be answered with "Yes" or "No": `is<X>`, `has<X>`, `can<X>`, `should<X>`, etc.

| 💚 Good             | 💔 Bad            |
| :------------------ | :---------------- |
| `isFound`           | `isNotFound`      |
| `isDenied`          | `isNotAuthorized` |
| `isGranted`         |                   |
| `hasUsers`          |                   |
| `canAuthorize`      |                   |
| `shouldAccept`      |                   |
| `isReady`           |                   |
| `includes`          |                   |
| `matchesValue`      | `valueMatches`    |
| `equals`, `isEqual` |                   |
| `isFetching`        | `fetching`        |

<!--

Exception?: React component props (linter-rule) -- use HTML approach

💔 Bad: `isDisabled`, `isOpen`, `isFetching`

💚 Good: `disabled`, `open`, `fetching`

-->

For constants & enums use: `UPPER_CASE` for constants (don't use `UPPER_CASE` for objects holding constants) and `PascalCase` for enums (in TypeScript, as said [here](https://www.typescriptlang.org/docs/handbook/enums.html))

| 💚 Good           | 💔 Bad            |
| :---------------- | :---------------- |
| `API_URL`         |                   |
| `date.ISO_FORMAT` | `DATE.ISO_FORMAT` |
| `api.VERSION`     | `API.VERSION`     |
| `TimeUnit.Second` | `TimeUnit.SECOND` |

Common conventions

| 💚 Good                                      | 💔 Bad                  |
| :------------------------------------------- | :---------------------- |
| `account`                                    | `acc`                   |
| `arr`                                        | `array`                 |
| `avg`                                        | `average`               |
| `bool`                                       |                         |
| `birthdate`                                  | `birthDate`, `birthday` |
| `calculate`                                  | `calc`                  |
| `container`                                  | `cnt`                   |
| `center`                                     | `cnt`                   |
| `col` together with `row`                    | `column`                |
| `cur`                                        | `current`               |
| `class_`                                     | `cls`, `klass`, `clazz` |
| `digit`                                      | `dgt`                   |
| `event`                                      | `e`                     |
| `error`                                      | `e`, `err`              |
| `first`                                      | `fst`                   |
| `hour`                                       | `hr`                    |
| `ind`                                        | `i`, `index`            |
| `len`                                        | `length`                |
| `limit`                                      | `lim`, `lmt`            |
| TODO: `login`, `logout`, `signin`, `signout` |                         |
| `max`                                        | `maximum`               |
| `min`                                        | `minimum`               |
| `minute`                                     | `min`                   |
| `model`                                      | `mdl`                   |
| `memo`                                       | `acc` in `reduce()`     |
| `num`                                        | `number`                |
| `obj`                                        | `object`                |
| `opt`                                        | `optimal`               |
| `pos`                                        | `position`              |
| `second`                                     | `sec`, `snd`            |
| `str`                                        | `string`                |
| `val`                                        | `value`                 |
| `fn`, `fns`                                  | `func`, `funcs`         |
| `cb`                                         | `callback`              |
| `util`, `utils`                              | `tools`, `helpers`      |

Name symmetry. This is not a strict list, just a recommendation

| Name                | Symmetric name           |
| :------------------ | :----------------------- |
| `get`               | `set`                    |
| `add`               | `remove`                 |
| `create`            | `destroy`                |
| `start`             | `stop` (`finish`?)       |
| `begin`             | `end`                    |
| `insert`            | `delete`                 |
| `increment`, `incr` | `decrement`, `decr`      |
| `old`               | `new`                    |
| `begin`             | `end`                    |
| `first`             | `last`                   |
| `head`              | `tail`                   |
| `up`                | `down`                   |
| `min`               | `max` and (`opt`, `avg`) |
| `next`              | `previous`, `prev`       |
| `open`              | `close`                  |
| `show`              | `hide`                   |
| `pause`, `suspend`  | `resume`                 |
| `setup`             | `teardown`               |

### Examples

```js
messages.forEach((message, ind, arr) => {})
messages.map((message, ind, arr) => {})
messages.reduce((memo, cur, ind, arr) => {})
messages.sort((a, b) => {})

// Inside Util functions
collection.forEach((val, ind, arr) => {})
collection.map((val, ind, arr) => {})
```

### TODO

- Prefer `aTob` and not `bFromA`
- `_` as placeholder
- `window`, `dialog`, `popup`, `modal`, `scale`, `text`, `scrollbar`, `form`, `menu`, `label`, `button`, `toggle`
- `compute`, `make`, `process`, `remove`, `delete`, `get`, `set`, `fetch`, `find`, `initialize`

## How to name variables in CSS

### CSS modules

No `&__element` and `&--modifier` nonsense!

```postcss
/* Root element always has root class */

.root {
  padding: 0;
}

/* Block, element, inner component, etc... should be a simple noun, singular or plural */
.header {
  margin-top: 20px;
}

.button {
  border: 1px solid black;

  /* Modifier is nothing more than an adjacent class */
  &.active {
    border: 1px solid gray;
  }

  &.green {
    background-color: green;
  }
}

/* ul > li > a convention */
.numbers {
}

.number {
}

.link {
}
```

- [[Naming @media breakpoints and ranges]]
- [[How I write unit tests|Naming in unit tests]]

---

- https://javascript.info/ninja-code

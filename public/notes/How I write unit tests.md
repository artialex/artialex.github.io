---
tags: [fe, guide]
---

# How I write unit tests

- I use jest for unit testing
- I put test inside `*.test.js` files alongside with the tested files
- I don't test trivial functions
- I use the naming convention described below:

```js
describe('<filename>', () => {
  describe('<function|method>', () => {
    it('should [<do something>] when [<did something>]', () => {
      ...
    })
  })
})
```

Example:

```js
import { getAge } from './datetime.utils.js'

describe('datetime.utils', () => {
  describe('getAge', () => {
    it('should [calculate age] when [passed an ISO date string]', () => {
      expect(getAge('1990-01-01')).toEqual(29)
    })

    it('should [calculate age] when [passed a JS Date]', () => {
      expect(getAge(964411116233)).toEqual(20)
    })
  })
})
```

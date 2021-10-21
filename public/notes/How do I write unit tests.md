# How do I write unit tests

- Use jest for unit testing
- Write tests in `*.test.js` files
- Put test files alongside with the tested files
- Use the naming convention described below
- Don't test trivial functions

## Naming conventions

```javascript
describe('<filename>', () => {
  describe('<function|method>', () => {
    it('should [<do something>] when [<doing something>]', () => {
      ...
    })
	
  	describe('when [<doing something>]', () => {
	  it('should [<do something>]', () => {
      	...
      })
	})
  })
})
```

### Example

```javascript
import { getAge } from './datetime.utils.js'

describe('datetime.utils', () => {
  describe('getAge', () => {
    it('should [calculate age] when [passing an ISO date string]', () => {
      expect(getAge('1990-01-01')).toEqual(29)
    })

    it('should [calculate age] when [passing a JS Date]', () => {
      expect(getAge(964411116233)).toEqual(20)
    })
  })
})
```

---

### TODO 

-  mrm 
-  codemod 
-   TDD
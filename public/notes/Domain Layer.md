---
tags: [architecture]
---

# Domain Layer

_Enterprise wide_ business logic

## Contains:

- Entities
  - Objects with methods
  - Data structures
  - Functions
- Types
- Enums
- Errors & Exceptions

## Examples:

- User entity, type & errors
- Price convertation & format logic
- Date convertation & format logic

## Notes

- Mostly _Vanilla_
- No _UI_, no _Database_, no _Frameworks_
- Easy to test
- Rarely changes
- Does not depend on any other layer

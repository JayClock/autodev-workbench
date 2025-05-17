# domain

```plantuml
class User {}

class Project {}

User "1" -- "*" Project
```

## Building

Run `nx build domain` to build the library.

## Running unit tests

Run `nx test domain` to execute the unit tests via [Jest](https://jestjs.io).

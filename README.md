# TypeScript Library Demo

- based on tsmean
  - https://www.tsmean.com/articles/how-to-write-a-typescript-library/

## Initial Setup Library

```bash
cd calculator-lib

# create tsconfig.json
tsc --init
# and edit "declaration": true

# create package.json
npm init

# setup typescript jest and misc packages
# https://medium.com/@admin_86118/testing-typescript-node-with-jest-6bf5db18119c
npm install typescript @types/node ts-node \
    jest @types/jest ts-jest \
    source-map-support @types/source-map-support \
    onchange serve --save-dev

# create jest.config.js with ts-jest (no need Babel)
# https://github.com/kulshekhar/ts-jest
npx ts-jest config:init
```

## Test Library

```bash
# run test
npx jest

# test with coverage
npx jest --coverage

# test with watch
npx jest --coverage --watchAll

# view coverage
npx serve coverage/lcov-report
```

## Use Library Locally

```bash
cd calculator-lib/

# update package.json
# name: calclib1349835 (whatever unique name)
# private: true (not to publish npm)

# typescript compile to create dist directory
tsc

# cd to app which use the lib
cd calculator-app/

npm init # only first time
npm link ../calculator-lib

tsc somefile.ts
node somefile.js
# this should show "hi" and add result 8
```

```typescript
// somefile.ts
import { sayHello, add } from 'calclib1349835'

sayHello();
console.log(add(3, 5));
```

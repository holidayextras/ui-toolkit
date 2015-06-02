# Troubleshooting
A place to share issues in running the toolkit and solutions to solve these problems. These can be common issues or specific user problems.

## Low resource limits

### Problem

```bash
Building docs
Error: EMFILE, open '~/ui-toolkit/docs/node_modules/react/package.json'
npm ERR! weird error 1
npm ERR! not ok code 0
```

### Solution
```bash
ulimit -n 9999
```

## React Bootstrap in components

### Problem
When using React Bootstrap in a component (in particular we were using NavBar), you get the following error:
```
Uncaught Error: Invariant Violation: addComponentAsRefTo(...): Only a ReactOwner can have refs. This usually means that you're trying to add a ref to a component that doesn't have an owner (that is, was not created inside of another component's `render` method). Try rendering this component inside of a new top-level component which will hold the ref.
```

### Solution
Unknown at this point... a "workaround" was to just make a local component / template & include that.

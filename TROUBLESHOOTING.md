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

## Uncaught Invariant Violation
*Evident after a react version bump and viewing the docs.*

![](https://cldup.com/0hu7pFNnh--3000x3000.png)

### Solution
```
rm -rf node_modules/
rm -rf docs/node_modules/
npm install
npm run docs
```

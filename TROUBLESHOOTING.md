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

# react-tests-globals-setup

If you want to unit test react components with node & mocha, some globals need to be set up to make the environment more browser-like.

This will set up those globals.

The current version of this module uses a fake DOM provided by `jsdom@3`, which works with node 0.10 and 0.12. A future version will use newer jsdom and require node 4.

## Usage

```
npm install react-tests-globals-setup --save-dev
```

Then add it as an argument to `mocha`, probably in your package.json:

```
  "scripts": {
    "test": "mocha --require react-tests-globals-setup"
  }
```

Or in `mocha.opts`

```
--require react-tests-globals-setup
```

## Testing

```
npm test
```

## Linting

```
npm run lint
```

# ui-component-flag
Flags are used to highlight taxonomy terms or 'tags' on elements. For example 'special offer' or 'limited time only'

## Installation
To install this component:

`npm install [git repo]`

## Development
To build the dev site run:

`npm run build-dev`

## Usage
In the javascript file you wish to use it in:

`var FlagComponent = require('ui-component-flag');`

Then in your React view add the tags:

`<FlagComponent />`

## Building a distributable version
To build a distributable version of the component:

`npm run build-dist`

Note this will *not* bundle React. It will assume that's in scope to use in your project already.

## Running the tests
Once generated, you can run a components tests with:

`npm test`

Tests are written using [Jest](https://facebook.github.io/jest/).

## Parameters

## Example

```jsx
var React = require('react');
var FlagComponent = require('ui-component-flag');

module.exports = React.createClass({
  render: function() {
    return(
      <FlagComponent />
    );
  }
});
```

## Example
For more information please visit the [ui-toolkit documentation](http://hungrygeek.holidayextras.co.uk/ui-toolkit)

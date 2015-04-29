# ui-component-button
Our main button component.

## Installation
To install this module:

`npm install [git repo]`

## Development
To build the dev site run:

`npm run build-dev`

## Usage
In the javascript file you wish to use it in:

`var Button = require('ui-component-button');`

Then in your React view add the tags:

`<Button />`

## Running the tests

`npm test`

## Building a distributable version
To build a distributable version of the component:

`npm run build-dist`

## Parameters

## Example

```jsx
var React = require('react');
var Button = require('ui-component-button');

module.exports = React.createClass({
  render: function() {
    return(
      <Button />
    );
  }
});
```

## Tests

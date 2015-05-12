# component-input
Input field with Schema & validation ( text, password & email )

## Installation
To install this component:

`npm install [git repo]`

## Development
To build the dev site run:

`npm run build-dev`

## Usage
In the javascript file you wish to use it in:

```js
var InputComponent = require('component-input');
```

Then in your React view add the tags:

```
<InputComponent
    ref={string}
    type={string: text || password || email}
    label={string}
    placeholder={string}
    defaultValue={string}
    error={string}
    disabled={bool}
    onChange={function}
    required
 />
```
 
### Props
 
| Name          | Type    | Default   | Description                                                     |
|-------------  |-------- |---------  |---------------------------------------------------------------  |
| type          | string  | `text`    | The type of input field, e.g., `text`, `password`, or `email`   |
| required      | bool    | `false`   | Make the form required                                          |
| label         | string  |           | an instructional label for the input                            |
| placeholder   | string  |           | inline placeholder text for the input                           |
| error         | string  |           | error message for the input                                     |
 
### Methods

| Method  | Usage                      |                                           |
|-------- |--------------------------  |-----------------------------------------  |
| focus   | `InputComponent.focus()`   | Sets the focus on the input element.      |
| value   | `InputComponent.value()`   | Returns the value on the input element.   |
| clear   | `InputComponent.clear()`   | Clears the value on the input element.    |
 
## Events

| Event     | Description                               |
|---------  |-----------------------------------------  |
| onChange  | Function runs on change                   |


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

```js
var React = require('react');
var InputComponent = require('component-input');

module.exports = React.createClass({
  render: function() {
    return(
      <InputComponent
        type="email"
        label="Email confirmation to"
        placeholder="Email Address"
        required
       />
    );
  }
});
```
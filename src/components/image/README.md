# ui-component-image
Standard HTML Image Tag

## Installation
To install this component:

`npm install [git repo]`

## Development
To build the dev site run:

`npm run build-dev`

## Usage
In the javascript file you wish to use it in:

`var ImageComponent = require('component-image');`

Then in your React view add the tags:

`<ImageComponent />`

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
var ImageComponent = require('component-image');

module.exports = React.createClass({
  render: function() {
    
    var src = 'http://www.vegetarian-shoes.co.uk/Portals/42/product/images/prd0683d04d-faaf-4826-a692-45d2e5cfbe3b.jpg';
    var alt = 'Shoes';
    
    return(
      <ImageComponent src={src} alt={alt} />
    );
  }
});
```
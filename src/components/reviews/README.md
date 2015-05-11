# ui-component-reviews
Reviews component

## Installation
To install this component:

`npm install [git repo]`

## Development
To build the dev site run:

`npm run build-dev`

## Usage
In the javascript file you wish to use it in:

`var ReviewsComponent = require('component-reviews');`

Then in your React view add the tags:

`<ReviewsComponent />`

## Building a distributable version
To build a distributable version of the component:

`npm run build-dist`

Note this will *not* bundle React. It will assume that's in scope to use in your project already.

## Running the tests
Once generated, you can run a components tests with:

`npm test`

Tests are written using [Jest](https://facebook.github.io/jest/).

## Parameters

* reviewPercentage - Number (required)
* reviewCount - Number (required)

## Example

```jsx
var React = require('react');
var ReviewsComponent = require('ui-component-reviews');

module.exports = React.createClass({
  render: function() {
    return(
      <ReviewsComponent reviewPercentage={98} reviewCount={123} />
    );
  }
});
```

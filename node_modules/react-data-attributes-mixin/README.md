# react-data-attributes-mixin
[![Build Status](https://travis-ci.org/holidayextras/react-data-attributes-mixin.svg)](https://travis-ci.org/holidayextras/react-data-attributes-mixin)

Take data from props and convert it to HTML data-* attributes

### Example

```jsx
var DataAttributesMixin = require('react-data-attributes-mixin');

var Example = React.createClass({

  mixins: [DataAttributesMixin],
  
  propTypes: {
    data: React.PropTypes.object
  },
  
  getDefaultProps: function() {
    return {
      data: {
        type: 'button',
        location: 'web app',
        fooBar: 'baz'
      }
    };
  },

  render: function() {
    var dataAttributes = this.getDataAttributesFromProps();
    return (
      <button {...dataAttributes} />
    );
  }
  
});
```

#### Output

```html
<button data-type="button" data-location="web app" data-foo-bar="baz"></button>
```

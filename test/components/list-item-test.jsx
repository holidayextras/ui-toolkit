'use strict';
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var assert = require('chai').assert;
var ListItem = require('../../src/components/list-item/list-item.jsx');

describe('ListItemComponent ', function() {

  it('is an element', function() {
    assert.ok(TestUtils.isElement(<ListItem />));
  });


  it('should render an list item with a class of component-list-item', function() {
    var ListInstance = TestUtils.renderIntoDocument(
      <ListItem/>
    );

    var renderedListItem = TestUtils.findRenderedDOMComponentWithClass(ListInstance, 'component-list-item');
    assert.equal(renderedListItem.getDOMNode().nodeName, 'LI');
  });


});

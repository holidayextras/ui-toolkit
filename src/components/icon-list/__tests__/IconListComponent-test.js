/** @jsx React.DOM */

var React = require('react');
var IconList = require('../code/views/IconListComponentView.jsx');
var IconListItem = require('../../icon-list-item/code/views/IconListItemComponentView.jsx');

describe('iconListComponent ', function() {

  it('is an element', function() {
    assert.ok(TestUtils.isElement(<IconList />));
  });

  it('should render an unordered list with a class of component-icon-list', function() {
    var iconListInstance = TestUtils.renderIntoDocument(
      <IconList />
    );

    var renderedIconList = TestUtils.findRenderedDOMComponentWithClass(iconListInstance, 'component-icon-list');
    assert.equal(renderedIconList.getDOMNode().nodeName, 'UL');
  });

  it('should support multiple IconListItem children', function() {
    var iconListInstance = TestUtils.renderIntoDocument(
      <IconList>
        <IconListItem icon="check">Positive</IconListItem>
        <IconListItem icon="close">Negative</IconListItem>
      </IconList>
    );

    var renderedItems = TestUtils.scryRenderedComponentsWithType(iconListInstance, IconListItem);
    assert.ok(TestUtils.findRenderedDOMComponentWithClass(renderedItems[0], 'component-icon-list-item'));
    assert.ok(TestUtils.findRenderedDOMComponentWithClass(renderedItems[1], 'component-icon-list-item'));
  });

});

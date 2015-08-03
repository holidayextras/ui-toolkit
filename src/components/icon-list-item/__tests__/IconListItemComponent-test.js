/** @jsx React.DOM */

var React = require('react/addons');
var IconListItem = require('../code/views/IconListItemComponentView.jsx');
var TestUtils = React.addons.TestUtils;

describe('IconListItemComponent', function() {

  it('is an element', function() {
    assert.ok(TestUtils.isElement(<IconListItem icon="check" />));
  });

  it('should render a list item with a class of component-icon-list-item', function() {
    var iconListItemInstance = TestUtils.renderIntoDocument(
      <IconListItem icon="check" />
    );

    var renderedIconListItem = TestUtils.findRenderedDOMComponentWithClass(iconListItemInstance, 'component-icon-list-item');
    assert.equal(renderedIconListItem.getDOMNode().nodeName, 'LI');
  });

  it('should render an i tag with the correct font awesome classes', function() {
    var iconListItemInstance = TestUtils.renderIntoDocument(
      <IconListItem icon="check" />
    );

    var renderedIconListItem = TestUtils.findRenderedDOMComponentWithClass(iconListItemInstance, 'component-icon-list-item');
    assert.equal(renderedIconListItem.getDOMNode().firstChild.nodeName, 'I');
    assert.equal(renderedIconListItem.getDOMNode().firstChild.className, 'fa fa-fw fa-check');
  });

  it('render text content passed in as child', function() {
    var iconListItemInstance = TestUtils.renderIntoDocument(
      <IconListItem icon="check">this is a check</IconListItem>
    );

    var renderedIconListItem = TestUtils.findRenderedDOMComponentWithClass(iconListItemInstance, 'component-icon-list-item');
    assert.equal(renderedIconListItem.getDOMNode().textContent, 'this is a check');
  });

  it('renders html tags as children', function() {
    var iconListItemInstance = TestUtils.renderIntoDocument(
      <IconListItem icon="check"><strong>this is a strong check</strong></IconListItem>
    );

    var renderedIconListItem = TestUtils.findRenderedDOMComponentWithClass(iconListItemInstance, 'component-icon-list-item');
    assert.equal(renderedIconListItem.getDOMNode().lastChild.nodeName, 'STRONG');
    assert.equal(renderedIconListItem.getDOMNode().lastChild.textContent, 'this is a strong check');
  });

});

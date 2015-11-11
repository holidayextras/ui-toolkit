'use strict';
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var assert = require('chai').assert;
var IconList = require('../../src/components/icon-list/icon-list.jsx');
var IconListItem = require('../../src/components/icon-list-item/icon-list-item.jsx');

describe('IconListComponent ', function() {

  it('is an element', function() {
    assert.ok(TestUtils.isElement(<IconList />));
  });

  it('should render an unordered list with a class of component-icon-list', function() {
    var iconListInstance = TestUtils.renderIntoDocument(
      <IconList />
    );

    var renderedIconList = TestUtils.findRenderedDOMComponentWithClass(iconListInstance, 'component-icon-list');
    assert.equal(renderedIconList.nodeName, 'UL');
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

'use strict';
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var assert = require('chai').assert;
var List = require('../../src/components/list/list.jsx');

describe('ListComponent ', function() {

  it('is an element', function() {
    assert.ok(TestUtils.isElement(<List />));
  });


  it('should render an unordered list with a class of component-unordered-list', function() {
    var ListInstance = TestUtils.renderIntoDocument(
      <List type="unordered"/>
    );

    var renderedList = TestUtils.findRenderedDOMComponentWithClass(ListInstance, 'component-unordered-list');
    assert.equal(renderedList.nodeName, 'UL');
  });

  it('should render an ordered list with a class of component-ordered-list', function() {
    var ListInstance = TestUtils.renderIntoDocument(
      <List type="ordered"/>
    );

    var renderedList = TestUtils.findRenderedDOMComponentWithClass(ListInstance, 'component-ordered-list');
    assert.equal(renderedList.nodeName, 'OL');
  });

  it('should render an description list with a class of component-description-list', function() {
    var ListInstance = TestUtils.renderIntoDocument(
      <List type="description"/>
    );

    var renderedList = TestUtils.findRenderedDOMComponentWithClass(ListInstance, 'component-description-list');
    assert.equal(renderedList.nodeName, 'DL');
  });

  it('should render an icon list with a class of component-icon-list', function() {
    var ListInstance = TestUtils.renderIntoDocument(
      <List type="icon"/>
    );

    var renderedList = TestUtils.findRenderedDOMComponentWithClass(ListInstance, 'component-icon-list');
    assert.equal(renderedList.nodeName, 'UL');
  });

  it('should render an unordered list with a class of component-unordered-list if type is undefined', function() {
    var ListInstance = TestUtils.renderIntoDocument(
      <List/>
    );

    var renderedList = TestUtils.findRenderedDOMComponentWithClass(ListInstance, 'component-unordered-list');
    assert.equal(renderedList.nodeName, 'UL');
  });

  it('should render an unordered list with a class of component-unordered-list if type is unrecognised', function() {
    var ListInstance = TestUtils.renderIntoDocument(
      <List type="gibberish"/>
    );

    var renderedList = TestUtils.findRenderedDOMComponentWithClass(ListInstance, 'component-unordered-list');
    assert.equal(renderedList.nodeName, 'UL');
  });

});

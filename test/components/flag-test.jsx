'use strict';
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var assert = require('chai').assert;
var FlagComponent = require('../../src/components/flag/flag.jsx');

describe('FlagComponent', function() {

  it('should render a Flag', function() {
    var flag = TestUtils.renderIntoDocument(
      <FlagComponent>Special Offer</FlagComponent>
    );

    var renderedFlag = TestUtils.findRenderedDOMComponentWithClass(flag, 'component-flag');
    assert.equal(renderedFlag.getDOMNode().textContent, 'Special Offer');

  });

  it('should render a default flag', function() {
    var defaultFlag = TestUtils.renderIntoDocument(
      <FlagComponent size="default">Special Offer</FlagComponent>
    );

    var renderedFlag = TestUtils.findRenderedDOMComponentWithClass(defaultFlag, 'default');
    assert.isDefined(renderedFlag);

  });

  it('should render a danger flag', function() {
    var dangerFlag = TestUtils.renderIntoDocument(
      <FlagComponent purpose="danger">Special Offer</FlagComponent>
    );

    var renderedFlag = TestUtils.findRenderedDOMComponentWithClass(dangerFlag, 'danger');
    assert.isDefined(renderedFlag);

  });

  it('should render a medium flag', function() {
    var mediumFlag = TestUtils.renderIntoDocument(
      <FlagComponent size="medium">Special Offer</FlagComponent>
    );

    var renderedFlag = TestUtils.findRenderedDOMComponentWithClass(mediumFlag, 'medium');
    assert.isDefined(renderedFlag);

  });

  it('should render a large flag', function() {
    var largeFlag = TestUtils.renderIntoDocument(
      <FlagComponent size="large">Special Offer</FlagComponent>
    );

    var renderedFlag = TestUtils.findRenderedDOMComponentWithClass(largeFlag, 'large');
    assert.isDefined(renderedFlag);

  });

  it('should render a flag on the right', function() {
    var rightFlag = TestUtils.renderIntoDocument(
      <FlagComponent position="right">Special Offer</FlagComponent>
    );

    var renderedFlag = TestUtils.findRenderedDOMComponentWithClass(rightFlag, 'right');
    assert.isDefined(renderedFlag);

  });

  it('should render a small secondary right flag', function() {
    var smallSecondaryRightFlag = TestUtils.renderIntoDocument(
      <FlagComponent size="small" purpose="secondary" position="right">Book Now</FlagComponent>
    );

    var renderedFlag = TestUtils.findRenderedDOMComponentWithClass(smallSecondaryRightFlag, 'small secondary right');
    assert.isDefined(renderedFlag);

  });
});

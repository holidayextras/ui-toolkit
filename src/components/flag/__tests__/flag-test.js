/** @jsx React.DOM */

jest.dontMock('../code/views/flagView.jsx');
jest.dontMock('../../../utils/getComponentClasses');

var React = require('react/addons');
var FlagComponent = require('../code/views/flagView.jsx');
var TestUtils = React.addons.TestUtils;

describe('FlagComponent', function() {

  it('should render a Flag', function() {
    var flag = TestUtils.renderIntoDocument(
      <FlagComponent>Special Offer</FlagComponent>
    );

    var renderedFlag = TestUtils.findRenderedDOMComponentWithClass(flag, 'component-flag');
    expect(renderedFlag.getDOMNode().textContent).toEqual('Special Offer');

  });

  it('should render a default flag', function() {
    var defaultFlag = TestUtils.renderIntoDocument(
      <FlagComponent size="default">Special Offer</FlagComponent>
    );

    var renderedFlag = TestUtils.findRenderedDOMComponentWithClass(defaultFlag, 'default');
    expect(renderedFlag).toBeDefined();

  });

  it('should render a danger flag', function() {
    var dangerFlag = TestUtils.renderIntoDocument(
      <FlagComponent purpose="danger">Special Offer</FlagComponent>
    );

    var renderedFlag = TestUtils.findRenderedDOMComponentWithClass(dangerFlag, 'danger');
    expect(renderedFlag).toBeDefined();

  });

  it('should render a large flag', function() {
    var largeFlag = TestUtils.renderIntoDocument(
      <FlagComponent size="large">Special Offer</FlagComponent>
    );

    var renderedFlag = TestUtils.findRenderedDOMComponentWithClass(largeFlag, 'large');
    expect(renderedFlag).toBeDefined();

  });

  it('should render a flag on the right', function() {
    var rightFlag = TestUtils.renderIntoDocument(
      <FlagComponent position="right">Special Offer</FlagComponent>
    );

    var renderedFlag = TestUtils.findRenderedDOMComponentWithClass(rightFlag, 'right');
    expect(renderedFlag).toBeDefined();

  });

  it('should render a small secondary right flag', function() {
    var smallSecondaryRightFlag = TestUtils.renderIntoDocument(
      <FlagComponent size="small" purpose="secondary" position="right">Book Now</FlagComponent>
    );

    var renderedFlag = TestUtils.findRenderedDOMComponentWithClass(smallSecondaryRightFlag, 'small secondary right');
    expect(renderedFlag).toBeDefined();

  });
});

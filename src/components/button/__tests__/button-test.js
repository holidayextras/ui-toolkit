/** @jsx React.DOM */

jest.dontMock('../code/views/buttonView.jsx');
jest.dontMock('../../../utils/getComponentClasses');

var React = require('react/addons');
var ButtonView = require('../code/views/buttonView.jsx');
var TestUtils = React.addons.TestUtils;

describe('ButtonComponent', function() {


  it('should render button', function() {
    var button = TestUtils.renderIntoDocument(
      <ButtonView>Book Now</ButtonView>
    );

    var renderedButton = TestUtils.findRenderedDOMComponentWithClass(button, 'component-button');
    expect(renderedButton.getDOMNode().textContent).toEqual('Book Now');

  });

  it('should render a primary button', function() {
    var primaryButton = TestUtils.renderIntoDocument(
      <ButtonView purpose="primary">Book Now</ButtonView>
    );

    var renderedButton = TestUtils.findRenderedDOMComponentWithClass(primaryButton, 'primary');
    expect(renderedButton).toBeDefined();

  });

  it('should render a large button', function() {
    var largeButton = TestUtils.renderIntoDocument(
      <ButtonView size="large">Book Now</ButtonView>
    );

    var renderedButton = TestUtils.findRenderedDOMComponentWithClass(largeButton, 'large');
    expect(renderedButton).toBeDefined();

  });

  it('should render a small secondary button', function() {
    var smallSecondaryButton = TestUtils.renderIntoDocument(
      <ButtonView size="small" purpose="secondary">Book Now</ButtonView>
    );

    var renderedButton = TestUtils.findRenderedDOMComponentWithClass(smallSecondaryButton, 'small secondary');
    expect(renderedButton).toBeDefined();

  });

});

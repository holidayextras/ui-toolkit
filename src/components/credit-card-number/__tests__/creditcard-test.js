/** @jsx React.DOM */

jest.dontMock('../code/views/creditCardNumberView.jsx');

var React = require('react/addons');
var CreditCardNumberComponent = require('../code/views/creditCardNumberView.jsx');
var TestUtils = React.addons.TestUtils;

describe('CreditCardNumberComponent', function() {

  it('is an element', function() {
    expect(TestUtils.isElement(<CreditCardNumberComponent />)).toBeTruthy();
  });

  it('should render a label', function() {
    var labelCheck = TestUtils.renderIntoDocument(
      <CreditCardNumberComponent label="Credit Card: " />
    );

    var renderedLabel = TestUtils.findRenderedDOMComponentWithClass(labelCheck, 'credit-card-number-label');
    expect(renderedLabel).toBeDefined();
  });

  it('should render credit card images', function() {
    var imagesCheck = TestUtils.renderIntoDocument(
      <CreditCardNumberComponent showImages />
    );

    var renderedImages = TestUtils.findRenderedDOMComponentWithClass(imagesCheck, 'credit-card-images');
    expect(renderedImages).toBeDefined();
  });

});

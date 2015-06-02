/** @jsx React.DOM */

var CreditCardNumberComponent = require('../code/views/creditCardNumberView.jsx');

describe('CreditCardNumberComponent', function() {

  it('should render a credit card number input', function() {
    var creditCardNumberInput = TestUtils.renderIntoDocument(
      <CreditCardNumberComponent />
    );

    var renderedCreditCardNumberInput = TestUtils.findRenderedDOMComponentWithClass(creditCardNumberInput, 'component-credit-card-number');
    assert.isDefined(renderedCreditCardNumberInput);

  });

  it('should render a label', function() {
    var creditCardNumberInput = TestUtils.renderIntoDocument(
      <CreditCardNumberComponent label="Credit Card: " />
    );

    var renderedCreditCardLabel = TestUtils.findRenderedDOMComponentWithClass(creditCardNumberInput, 'credit-card-number-label');
    assert.isDefined(renderedCreditCardLabel);

  });

  it('should render credit card images', function() {
    var imagesCheck = TestUtils.renderIntoDocument(
      <CreditCardNumberComponent showImages />
    );

    var renderedImages = TestUtils.findRenderedDOMComponentWithClass(imagesCheck, 'credit-card-images');
    assert.isDefined(renderedImages);
  });

});

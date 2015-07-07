/** @jsx React.DOM */

var React = require('react');
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

  it('should not have default value', function() {
    var creditCardNumber = TestUtils.renderIntoDocument(
      <CreditCardNumberComponent />
    );

    var renderedCreditCardNumber = TestUtils.findRenderedDOMComponentWithClass(creditCardNumber, 'credit-card-number-input');
    assert.equal(renderedCreditCardNumber.getDOMNode().value, '');
  });

  it('should have default placeholder', function() {
    var creditCardNumber = TestUtils.renderIntoDocument(
      <CreditCardNumberComponent />
    );

    var renderedCreditCardNumber = TestUtils.findRenderedDOMComponentWithClass(creditCardNumber, 'credit-card-number-input');
    assert.equal(renderedCreditCardNumber.getDOMNode().getAttribute('placeholder'), '• • • •   • • • •   • • • •   • • • •');
  });

  it('should have default ID', function() {
    var creditCardNumber = TestUtils.renderIntoDocument(
      <CreditCardNumberComponent />
    );

    var renderedCreditCardNumber = TestUtils.findRenderedDOMComponentWithClass(creditCardNumber, 'credit-card-number-input');
    assert.equal(renderedCreditCardNumber.getDOMNode().id, 'credit-card-number');
  });

  it('should have default name', function() {
    var creditCardNumber = TestUtils.renderIntoDocument(
      <CreditCardNumberComponent />
    );

    var renderedCreditCardNumber = TestUtils.findRenderedDOMComponentWithClass(creditCardNumber, 'credit-card-number-input');
    assert.equal(renderedCreditCardNumber.getDOMNode().name, 'credit-card-number');
  });

  it('should have custom value', function() {
    var creditCardNumber = TestUtils.renderIntoDocument(
      <CreditCardNumberComponent defaultValue="4485148248332663" />
    );

    var renderedCreditCardNumber = TestUtils.findRenderedDOMComponentWithClass(creditCardNumber, 'credit-card-number-input');
    assert.equal(renderedCreditCardNumber.getDOMNode().value, '4485148248332663');
  });

  it('should have custom placeholder', function() {
    var creditCardNumber = TestUtils.renderIntoDocument(
      <CreditCardNumberComponent placeHolder="Enter Credit Card" />
    );

    var renderedCreditCardNumber = TestUtils.findRenderedDOMComponentWithClass(creditCardNumber, 'credit-card-number-input');
    assert.equal(renderedCreditCardNumber.getDOMNode().getAttribute('placeholder'), 'Enter Credit Card');
  });

  it('should have custom ID', function() {
    var creditCardNumber = TestUtils.renderIntoDocument(
      <CreditCardNumberComponent id="test-credit-card-id" />
    );

    var renderedCreditCardNumber = TestUtils.findRenderedDOMComponentWithClass(creditCardNumber, 'credit-card-number-input');
    assert.equal(renderedCreditCardNumber.getDOMNode().id, 'test-credit-card-id');
  });

  it('should have custom name', function() {
    var creditCardNumber = TestUtils.renderIntoDocument(
      <CreditCardNumberComponent name="test-credit-card-name" />
    );

    var renderedCreditCardNumber = TestUtils.findRenderedDOMComponentWithClass(creditCardNumber, 'credit-card-number-input');
    assert.equal(renderedCreditCardNumber.getDOMNode().name, 'test-credit-card-name');
  });

});

describe('CreditCardNumberComponent Valid Card Number', function() {
  var input, renderedInput;

  beforeEach(function(){

    input = TestUtils.renderIntoDocument(
      <CreditCardNumberComponent />
    );

    renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'credit-card-number-input');
  });

  it('should not have errors', function() {
    TestUtils.Simulate.change(renderedInput.getDOMNode(), { target: { value: '4485148248332663' }});
    assert.equal(input.state.unitTestError, null);
  });
});

describe('CreditCardNumberComponent Default Error Message', function() {
  var input, renderedInput;

  beforeEach(function(){

    input = TestUtils.renderIntoDocument(
      <CreditCardNumberComponent />
    );

    renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'credit-card-number-input');
  });

  it('should change the value to be invalid and throw error state with default message', function() {
    TestUtils.Simulate.change(renderedInput.getDOMNode(), { target: { value: '12345' }});
    assert.equal(input.state.unitTestError, 'Invalid Card Number');
  });
});

describe('CreditCardNumberComponent Custom Error Message', function() {
  var input, renderedInput;
  var errorMessage = 'Invalid Credit Card Number';

  beforeEach(function(){

    input = TestUtils.renderIntoDocument(
      <CreditCardNumberComponent errorMessage={errorMessage} />
    );
    renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'credit-card-number-input');
  });

  it('should change the value to be invalid and throw error state with custom message', function() {
    TestUtils.Simulate.change(renderedInput.getDOMNode(), { target: { value: '12345' }});
    assert.equal(input.state.unitTestError, errorMessage);
  });
});

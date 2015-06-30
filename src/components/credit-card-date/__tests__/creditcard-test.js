/** @jsx React.DOM */
var React = require('react');
var CreditCardDateView = require('../code/views/creditCardDateView.jsx');

describe('CreditCardDateComponent', function() {

  it('is an element', function() {
    var creditCardDate = TestUtils.renderIntoDocument(
      <CreditCardDateView />
    );

    var renderedCreditCardDate = TestUtils.findRenderedDOMComponentWithClass(creditCardDate, 'component-credit-card-date');
    assert.isDefined(renderedCreditCardDate);
  });

  it('should not render a label', function() {
    var creditCardDate = TestUtils.renderIntoDocument(
      <CreditCardDateView />
    );

    var renderedCreditCardLabel = TestUtils.scryRenderedDOMComponentsWithClass(creditCardDate, 'credit-card-date-label');
    assert.isTrue(renderedCreditCardLabel.length === 0);
  });

  it('should render a label', function() {
    var creditCardDate = TestUtils.renderIntoDocument(
      <CreditCardDateView label="Expires: " />
    );

    var renderedCreditCardLabel = TestUtils.findRenderedDOMComponentWithClass(creditCardDate, 'credit-card-date-label');
    assert.isDefined(renderedCreditCardLabel);
  });

  it('should not have default value', function() {
    var creditCardDate = TestUtils.renderIntoDocument(
      <CreditCardDateView />
    );

    var renderedCreditCardDate = TestUtils.findRenderedDOMComponentWithClass(creditCardDate, 'credit-card-date-input');
    assert.equal(renderedCreditCardDate.getDOMNode().value, '');
  });

  it('should have default placeholder', function() {
    var creditCardDate = TestUtils.renderIntoDocument(
      <CreditCardDateView />
    );

    var renderedCreditCardDate = TestUtils.findRenderedDOMComponentWithClass(creditCardDate, 'credit-card-date-input');
    assert.equal(renderedCreditCardDate.getDOMNode().getAttribute('placeholder'), 'MM / YY');
  });

  it('should have default ID', function() {
    var creditCardDate = TestUtils.renderIntoDocument(
      <CreditCardDateView />
    );

    var renderedCreditCardDate = TestUtils.findRenderedDOMComponentWithClass(creditCardDate, 'credit-card-date-input');
    assert.equal(renderedCreditCardDate.getDOMNode().id, 'credit-card-date');
  });

  it('should have default name', function() {
    var creditCardDate = TestUtils.renderIntoDocument(
      <CreditCardDateView />
    );

    var renderedCreditCardDate = TestUtils.findRenderedDOMComponentWithClass(creditCardDate, 'credit-card-date-input');
    assert.equal(renderedCreditCardDate.getDOMNode().name, 'credit-card-date');
  });

  it('should have custom value', function() {
    var creditCardDate = TestUtils.renderIntoDocument(
      <CreditCardDateView defaultValue="12 / 20" />
    );

    var renderedCreditCardDate = TestUtils.findRenderedDOMComponentWithClass(creditCardDate, 'credit-card-date-input');
    assert.equal(renderedCreditCardDate.getDOMNode().value, '12 / 20');
  });

  it('should have custom placeholder', function() {
    var creditCardDate = TestUtils.renderIntoDocument(
      <CreditCardDateView placeHolder="MM/YY" />
    );

    var renderedCreditCardDate = TestUtils.findRenderedDOMComponentWithClass(creditCardDate, 'credit-card-date-input');
    assert.equal(renderedCreditCardDate.getDOMNode().getAttribute('placeholder'), 'MM/YY');
  });

  it('should have custom ID', function() {
    var creditCardDate = TestUtils.renderIntoDocument(
      <CreditCardDateView id="test-credit-card-id" />
    );

    var renderedCreditCardDate = TestUtils.findRenderedDOMComponentWithClass(creditCardDate, 'credit-card-date-input');
    assert.equal(renderedCreditCardDate.getDOMNode().id, 'test-credit-card-id');
  });

  it('should have custom name', function() {
    var creditCardDate = TestUtils.renderIntoDocument(
      <CreditCardDateView name="test-credit-card-name" />
    );

    var renderedCreditCardDate = TestUtils.findRenderedDOMComponentWithClass(creditCardDate, 'credit-card-date-input');
    assert.equal(renderedCreditCardDate.getDOMNode().name, 'test-credit-card-name');
  });
});

describe('CreditCardDateView Valid Date', function() {
  var input, renderedInput;

  beforeEach(function(){

    input = TestUtils.renderIntoDocument(
      <CreditCardDateView />
    );

    renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'credit-card-date-input');
  });

  it('should not have errors', function() {
    TestUtils.Simulate.change(renderedInput.getDOMNode(), { target: { value: '12 / 20' }});
    assert.equal(input.state.unitTestError, null);
  });
});

describe('CreditCardDateView Default Error Message', function() {
  var input, renderedInput;

  beforeEach(function(){

    input = TestUtils.renderIntoDocument(
      <CreditCardDateView />
    );

    renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'credit-card-date-input');
  });

  it('should change the value to be invalid and throw error state with default message', function() {
    TestUtils.Simulate.change(renderedInput.getDOMNode(), { target: { value: '12/12' }});
    assert.equal(input.state.unitTestError, 'Invalid Date');
  });
});

describe('CreditCardDateView Custom Error Message', function() {
  var input, renderedInput;
  var errorMessage = 'Invalid Expiration';

  beforeEach(function(){

    input = TestUtils.renderIntoDocument(
      <CreditCardDateView errorMessage={errorMessage} />
    );
    renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'credit-card-date-input');
  });

  it('should change the value to be invalid and throw error state with custom message', function() {
    TestUtils.Simulate.change(renderedInput.getDOMNode(), { target: { value: '12/12' }});
    assert.equal(input.state.unitTestError, errorMessage);
  });
});

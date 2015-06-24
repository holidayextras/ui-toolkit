/** @jsx React.DOM */

var InputView = require('../code/views/inputView.jsx');

describe('InputComponent', function() {

  it('should render text input', function() {
    var input = TestUtils.renderIntoDocument(
      <InputView type="text" />
    );

    var renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input');
    assert.isDefined(renderedInput);

  });

  it('should render password input', function() {
    var input = TestUtils.renderIntoDocument(
      <InputView type="password" />
    );

    var renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input');
    assert.isDefined(renderedInput);

  });

  it('should render email input', function() {
    var input = TestUtils.renderIntoDocument(
      <InputView type="email" />
    );

    var renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input');
    assert.isDefined(renderedInput);

  });

  it('should render input with label', function() {
    var input = TestUtils.renderIntoDocument(
      <InputView type="text" label="Full Name" />
    );

    var renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'input-group-label');
    assert.isDefined(renderedInput);

  });

  it('should render input as disabled', function() {
    var input = TestUtils.renderIntoDocument(
      <InputView type="text" disabled />
    );

    var renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field');
    assert.equal(renderedInput.getDOMNode().getAttribute('disabled'), '');

  });

  it('should render input as readonly', function() {
    var input = TestUtils.renderIntoDocument(
      <InputView type="text" readOnly />
    );

    var renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field');
    assert.equal(renderedInput.getDOMNode().getAttribute('readonly'), '');

  });

});

describe('InputComponent Error without Message', function() {
  var input, renderedInput;
  var emailValidator = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

  beforeEach(function(){

    input = TestUtils.renderIntoDocument(
      <InputView type="text" validator={emailValidator} />
    );

    renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field');
  });

  it('should change the value to be invalid and throw error state with null message', function() {
    TestUtils.Simulate.change(renderedInput.getDOMNode(), { target: { value: 'invalid @ email . #$%' }});
    assert.equal(input.state.unitTestError, null);
  });
});

describe('InputComponent Error with Custom Message', function() {
  var input, renderedInput;
  var emailValidator = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  var emailErrorMessage = 'Invalid Email';

  beforeEach(function(){

    input = TestUtils.renderIntoDocument(
      <InputView type="text" validator={emailValidator} errorMessage={emailErrorMessage} />
    );
    renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field');
  });

  it('should change the value to be invalid and throw error state with custom message', function() {
    TestUtils.Simulate.change(renderedInput.getDOMNode(), { target: { value: 'invalid @ email . #$%' }});
    assert.equal(input.state.unitTestError, emailErrorMessage);
  });
});

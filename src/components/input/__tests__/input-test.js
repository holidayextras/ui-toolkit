/** @jsx React.DOM */
var React = require('react');
var InputView = require('../code/views/inputView.jsx');

describe('InputComponent', function() {

  it('should render text input', function() {
    var input = TestUtils.renderIntoDocument(
      <InputView type="text" />
    );

    var renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input');
    assert.isDefined(renderedInput);

  });

  it('should render tel input', function() {
    var input = TestUtils.renderIntoDocument(
      <InputView type="tel" />
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

  it('should render number input', function() {
    var input = TestUtils.renderIntoDocument(
      <InputView type="number" />
    );

    var renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input');
    assert.isDefined(renderedInput);

  });

  it('should render input with label', function() {
    var input = TestUtils.renderIntoDocument(
      <InputView type="text" label="Full Name" />
    );

    var renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-label');
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

  it('should not have default value', function() {
    var input = TestUtils.renderIntoDocument(
      <InputView />
    );

    var renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field');
    assert.equal(renderedInput.getDOMNode().value, '');
  });

  it('should have default ID', function() {
    var input = TestUtils.renderIntoDocument(
      <InputView />
    );

    var renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field');
    assert.equal(renderedInput.getDOMNode().id, 'component-input');
  });

  it('should have default name', function() {
    var input = TestUtils.renderIntoDocument(
      <InputView />
    );

    var renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field');
    assert.equal(renderedInput.getDOMNode().name, 'component-input');
  });

  it('should have custom value', function() {
    var input = TestUtils.renderIntoDocument(
      <InputView defaultValue="Jane Doe" />
    );

    var renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field');
    assert.equal(renderedInput.getDOMNode().value, 'Jane Doe');
  });

  it('should have custom placeholder', function() {
    var input = TestUtils.renderIntoDocument(
      <InputView placeholder="Enter Name" />
    );

    var renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field');
    assert.equal(renderedInput.getDOMNode().getAttribute('placeholder'), 'Enter Name');
  });

  it('should have custom ID', function() {
    var input = TestUtils.renderIntoDocument(
      <InputView id="test-input-id" />
    );

    var renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field');
    assert.equal(renderedInput.getDOMNode().id, 'test-input-id');
  });

  it('should have custom name', function() {
    var input = TestUtils.renderIntoDocument(
      <InputView name="test-input-name" />
    );

    var renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field');
    assert.equal(renderedInput.getDOMNode().name, 'test-input-name');
  });

});

describe('InputComponent Error with Default Message', function() {
  var input;
  var renderedInput;
  var emailValidator = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

  beforeEach(function(){

    input = TestUtils.renderIntoDocument(
      <InputView type="text" validator={emailValidator} />
    );

    renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field');
  });

  it('should change the value to be invalid and throw error state with null message', function() {
    TestUtils.Simulate.change(renderedInput.getDOMNode(), { target: { value: 'invalid @ email . #$%' }});
    setTimeout(function(){
      assert.equal(input.state.error, 'Invalid Input');
    }, 1000);
  });
});

describe('InputComponent Error with Custom Message', function() {
  var input;
  var renderedInput;
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
    setTimeout(function(){
      assert.equal(input.state.error, 'Invalid Input');
    }, 1000);
  });
});

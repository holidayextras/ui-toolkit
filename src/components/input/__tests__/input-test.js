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

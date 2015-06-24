/** @jsx React.DOM */

var CreditCardDateView = require('../code/views/creditCardDateView.jsx');

describe('CreditCardDateComponent', function() {

  it('is an element', function() {
    var creditCardDate = TestUtils.renderIntoDocument(
      <CreditCardDateView />
    );

    var renderedCreditCardDate = TestUtils.findRenderedDOMComponentWithClass(creditCardDate, 'component-credit-card-date');
    assert.isDefined(renderedCreditCardDate);
  });

  it('should render a label', function() {
    var creditCardDate = TestUtils.renderIntoDocument(
      <CreditCardDateView label="Expires: " />
    );

    var renderedCreditCardLabel = TestUtils.findRenderedDOMComponentWithClass(creditCardDate, 'credit-card-date-label');
    assert.isDefined(renderedCreditCardLabel);
  });

});

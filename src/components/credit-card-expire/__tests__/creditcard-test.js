/** @jsx React.DOM */

var CreditCardExpireView = require('../code/views/creditCardExpireView.jsx');

describe('CreditCardExpireComponent', function() {

  it('is an element', function() {
    var creditCardExpires = TestUtils.renderIntoDocument(
      <CreditCardExpireView />
    );

    var renderedCreditCardExpires = TestUtils.findRenderedDOMComponentWithClass(creditCardExpires, 'component-credit-card-expire');
    assert.isDefined(renderedCreditCardExpires);
  });

  it('should render a label', function() {
    var creditCardExpires = TestUtils.renderIntoDocument(
      <CreditCardExpireView label="Expires: " />
    );

    var renderedCreditCardLabel = TestUtils.findRenderedDOMComponentWithClass(creditCardExpires, 'credit-card-expire-label');
    assert.isDefined(renderedCreditCardLabel);
  });

});

/** @jsx React.DOM */

var React = require('react');
var PaymentCardView = require('../code/views/paymentCardView.jsx');

describe('PaymentCardComponent', function() {


  it('should render payment card', function() {
    var paymentCard = TestUtils.renderIntoDocument(
      <PaymentCardView />
    );

    var renderedPaymentCard = TestUtils.findRenderedDOMComponentWithClass(paymentCard, 'component-payment-card');
    assert.equal(renderedButton.getDOMNode().textContent, 'Book Now');

  });

  it('should render a primary button', function() {
    var primaryButton = TestUtils.renderIntoDocument(
      <ButtonView purpose="primary">Book Now</ButtonView>
    );

    var renderedButton = TestUtils.findRenderedDOMComponentWithClass(primaryButton, 'primary');
    assert.isDefined(renderedButton);

  });

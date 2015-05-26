/** @jsx React.DOM */

jest.dontMock('../code/views/creditCardExpireView.jsx');

var React = require('react/addons');
var CreditCardExpireComponent = require('../code/views/creditCardExpireView.jsx');
var TestUtils = React.addons.TestUtils;

describe('CreditCardExpireComponent', function() {

  it('is an element', function() {
    expect(TestUtils.isElement(<CreditCardExpireComponent />)).toBeTruthy();
  });

  it('should render a label', function() {
    var labelCheck = TestUtils.renderIntoDocument(
      <CreditCardExpireComponent label="Expires" />
    );

    var renderedLabel = TestUtils.findRenderedDOMComponentWithClass(labelCheck, 'credit-card-expire-label');
    expect(renderedLabel).toBeDefined();
  });

});

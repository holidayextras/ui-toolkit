/** @jsx React.DOM */

jest.dontMock('../code/views/creditCardNumberView.jsx');

var React = require('react/addons');
var CreditCardNumberComponent = require('../code/views/creditCardNumberView.jsx');
var TestUtils = React.addons.TestUtils;

describe('CreditCardNumberComponent', function() {

  it('is an element', function() {
    expect(TestUtils.isElement(<CreditCardNumberComponent />)).toBeTruthy();
  });

});

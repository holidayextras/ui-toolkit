/** @jsx React.DOM */

jest.dontMock('../code/views/creditCardExpireView.jsx');

var React = require('react/addons');
var CreditCardExpireComponent = require('../code/views/creditCardExpireView.jsx');
var TestUtils = React.addons.TestUtils;

describe('CreditCardExpireComponent', function() {

  it('is an element', function() {
    expect(TestUtils.isElement(<CreditCardExpireComponent />)).toBeTruthy();
  });

});

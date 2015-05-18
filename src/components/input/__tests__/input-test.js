/** @jsx React.DOM */

jest.dontMock('../code/views/inputView.jsx');

var React = require('react/addons');
var InputComponent = require('../code/views/inputView.jsx');
var TestUtils = React.addons.TestUtils;

describe('InputComponent', function() {

  it('is a text input element', function() {
    expect(TestUtils.isElement(<InputComponent type="text" />)).toBeTruthy();
  });

  it('is a password input element', function() {
    expect(TestUtils.isElement(<InputComponent type="password" />)).toBeTruthy();
  });

  it('is an email input element', function() {
    expect(TestUtils.isElement(<InputComponent type="email" />)).toBeTruthy();
  });

});

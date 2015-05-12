/** @jsx React.DOM */

jest.dontMock('../code/views/inputView.jsx');

var React = require('react/addons');
var InputComponent = require('../code/views/inputView.jsx');
var TestUtils = React.addons.TestUtils;

describe('InputComponent', function() {

  it('is an element', function() {
    expect(TestUtils.isElement(<InputComponent />)).toBeTruthy();
  });

});

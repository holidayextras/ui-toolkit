/** @jsx React.DOM */

jest.dontMock('../code/views/flagView.jsx');

var React = require('react/addons');
var FlagComponent = require('../code/views/flagView.jsx');
var TestUtils = React.addons.TestUtils;

describe('FlagComponent', function() {

  it('is an element', function() {
    expect(TestUtils.isElement(<FlagComponent />)).toBeTruthy();
  });

});
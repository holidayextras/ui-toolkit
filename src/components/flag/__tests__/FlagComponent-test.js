/** @jsx React.DOM */

jest.dontMock('../code/views/FlagComponentView.jsx');

var React = require('react/addons');
var FlagComponent = require('../code/views/FlagComponentView.jsx');
var TestUtils = React.addons.TestUtils;

describe('FlagComponent', function() {

  it('is an element', function() {
    expect(TestUtils.isElement(<FlagComponent />)).toBeTruthy();
  });

});
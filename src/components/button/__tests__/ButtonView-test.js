/** @jsx React.DOM */

jest.dontMock('../code/views/buttonView.jsx');

var React = require('react/addons');
var ButtonView = require('../code/views/buttonView.jsx');
var TestUtils = React.addons.TestUtils;

describe('ButtonComponent', function() {

  it('is an element', function() {
    expect(TestUtils.isElement(<ButtonView />)).toBeTruthy();
  });

});
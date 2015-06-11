/** @jsx React.DOM */

jest.dontMock('../code/views/IconListComponentView.jsx');

var React = require('react/addons');
var IconListComponent = require('../code/views/IconListComponentView.jsx');
var TestUtils = React.addons.TestUtils;

describe('IconListComponent', function() {

  it('is an element', function() {
    expect(TestUtils.isElement(<IconListComponent />)).toBeTruthy();
  });

});
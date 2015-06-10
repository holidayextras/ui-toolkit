/** @jsx React.DOM */

jest.dontMock('../code/views/ProductTileComponentView.jsx');

var React = require('react/addons');
var ProductTileComponent = require('../code/views/ProductTileComponentView.jsx');
var TestUtils = React.addons.TestUtils;

describe('ProductTileComponent', function() {

  it('is an element', function() {
    expect(TestUtils.isElement(<ProductTileComponent />)).toBeTruthy();
  });

});
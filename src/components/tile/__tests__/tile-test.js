/** @jsx React.DOM */

jest.dontMock('../code/views/tileView.jsx');

var React = require('react/addons');
var UiComponentProductTileComponent = require('../code/views/tileView.jsx');
var TestUtils = React.addons.TestUtils;

describe('UiComponentProductTileComponent', function() {

  it('is an element', function() {
    expect(TestUtils.isElement(<UiComponentProductTileComponent />)).toBeTruthy();
  });

});
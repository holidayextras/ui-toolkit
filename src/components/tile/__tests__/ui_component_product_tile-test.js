/** @jsx React.DOM */

jest.dontMock('../code/views/ui_component_product_tile_component_view.jsx');

var React = require('react/addons');
var UiComponentProductTileComponent = require('../code/views/ui_component_product_tile_component_view.jsx');
var TestUtils = React.addons.TestUtils;

describe('UiComponentProductTileComponent', function() {
  it('is an element', function() {
    expect(TestUtils.isElement(<UiComponentProductTileComponent />)).toBeTruthy();
  });
});

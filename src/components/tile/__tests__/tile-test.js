/** @jsx React.DOM */

jest.dontMock('../code/views/tileView.jsx');

var React = require('react/addons');
var TileComponent = require('../code/views/tileView.jsx');
var TestUtils = React.addons.TestUtils;

describe('TileComponent', function() {

  it('should render a tile', function() {
    var img = {
      src: 'foo',
      alt: 'bar'
    };

    var tile = TestUtils.renderIntoDocument(
      <TileComponent image={img} title='baz' />
    );

    var renderedTile = TestUtils.findRenderedDOMComponentWithClass(tile, 'component-tile');
    expect(renderedTile).toBeDefined();
  });

  it('should render an image', function() {
    var img = {
      src: 'foo',
      alt: 'bar'
    };

    var tileImage = TestUtils.renderIntoDocument(
      <TileComponent image={img} title='baz' />
    );

    var renderedTileImage = TestUtils.findRenderedDOMComponentWithClass(tileImage, 'component-image');
    expect(renderedTileImage).toBeDefined();
  });


});

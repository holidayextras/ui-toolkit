/** @jsx React.DOM */

jest.dontMock('../code/views/tileView.jsx');

var React = require('react/addons');
var TileComponent = require('../code/views/tileView.jsx');
var TestUtils = React.addons.TestUtils;

describe('TileComponent', function() {

  it('is an element', function() {
    var img = {
      src: 'foo',
      alt: 'bar'
    };
    expect(TestUtils.isElement(<TileComponent image={img} title='title' />)).toBeTruthy();
  });

});
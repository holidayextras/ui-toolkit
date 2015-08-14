/** @jsx React.DOM */

var React = require('react');
var TileComponent = require('../code/views/tileView.jsx');

describe('TileComponent', function() {

  it('is an element', function() {
    var img = {
      src: 'foo',
      alt: 'bar'
    };

    assert.ok(TestUtils.isElement(<TileComponent image={img} title="title" />));
  });

});

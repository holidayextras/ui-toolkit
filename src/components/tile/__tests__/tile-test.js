/** @jsx React.DOM */

var assert = require('chai').assert;
var React = require('react/addons');
var TileComponent = require('../code/views/tileView.jsx');
var TestUtils = React.addons.TestUtils;

describe('TileComponent', function() {

  it('is an element', function() {
    var img = {
      src: 'foo',
      alt: 'bar'
    };

    assert.ok(TestUtils.isElement(<TileComponent image={img} title='title' />));
  });

});

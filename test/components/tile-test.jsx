'use strict';
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var assert = require('chai').assert;
var TileComponent = require('../../src/components/tile.jsx');

describe('TileComponent', function() {

  it('is an element', function() {
    var img = {
      src: 'foo',
      alt: 'bar'
    };

    assert.ok(TestUtils.isElement(<TileComponent image={img} title="title" />));
  });

});

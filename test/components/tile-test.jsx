'use strict';
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var assert = require('chai').assert;
var TileComponent = require('../../src/components/tile/tile.jsx');

describe('TileComponent', function() {

  it('is an element', function() {
    var img = {
      src: 'foo',
      alt: 'bar'
    };

    var component = TestUtils.renderIntoDocument(
    	<TileComponent image={img} title="title" />
    );
    
    assert.isDefined(component);
  });

});

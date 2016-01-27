'use strict';
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var assert = require('chai').assert;
var TileComponent = require('../../src/components/tile/tile.jsx');

describe('TileComponent', function() {

  var img

  beforeEach(function() {
    img = {
      src: 'foo',
      alt: 'bar'
    };
  });

  it('is an element', function() {
    var component = TestUtils.renderIntoDocument(
      <TileComponent image={img} />
    );

    assert.isDefined(component);
  });

  it('should render a tile/card with a title', function() {
    var tile = TestUtils.renderIntoDocument(
      <TileComponent image={img} title="foo" >You have been successful</TileComponent>
    );
    var h4s = TestUtils.scryRenderedDOMComponentsWithTag(tile, 'h4');
    assert.equal(h4s.length, 1);
    assert.equal(h4s[0].textContent, 'foo');
  });

});

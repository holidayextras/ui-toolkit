var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var assert = require('chai').assert;
var CardComponent = require('../code/views/cardView.jsx');

describe('TileComponent', function() {

  it('is an element', function() {
    var img = {
      src: 'foo',
      alt: 'bar'
    };

    assert.ok(TestUtils.isElement(<CardComponent image={img} title="title" />));
  });

});

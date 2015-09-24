var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var assert = require('chai').assert;
var RatingComponent = require('../code/rating.jsx');

describe('RatingComponent', function() {

  it('is an element', function() {
    assert.ok(TestUtils.isElement(<RatingComponent rating={4} />));
  });

});

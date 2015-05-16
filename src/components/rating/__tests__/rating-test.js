/** @jsx React.DOM */

var assert = require('chai').assert;
var React = require('react/addons');
var RatingComponent = require('../code/views/ratingView.jsx');
var TestUtils = React.addons.TestUtils;

describe('RatingComponent', function() {

  it('is an element', function() {
    assert.ok(TestUtils.isElement(<RatingComponent rating={4} />));
  });

});

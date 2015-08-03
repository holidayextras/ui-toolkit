/** @jsx React.DOM */

var React = require('react');
var RatingComponent = require('../code/views/ratingView.jsx');

describe('RatingComponent', function() {

  it('is an element', function() {
    assert.ok(TestUtils.isElement(<RatingComponent rating={4} />));
  });

});

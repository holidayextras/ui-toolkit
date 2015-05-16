/** @jsx React.DOM */

jest.dontMock('../code/views/ratingView.jsx');

var React = require('react/addons');
var RatingComponent = require('../code/views/ratingView.jsx');
var TestUtils = React.addons.TestUtils;

describe('RatingComponent', function() {

  it('is an element', function() {
    expect(TestUtils.isElement(<RatingComponent rating={4} />)).toBeTruthy();
  });

});

/** @jsx React.DOM */

jest.dontMock('../code/views/rating_component_view.jsx');

var React = require('react/addons');
var RatingComponent = require('../code/views/rating_component_view.jsx');
var TestUtils = React.addons.TestUtils;

describe('RatingComponent', function() {

  it('is an element', function() {
    expect(TestUtils.isElement(<RatingComponent />)).toBeTruthy();
  });

});
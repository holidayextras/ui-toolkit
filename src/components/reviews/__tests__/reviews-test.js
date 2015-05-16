/** @jsx React.DOM */

var assert = require('chai').assert;
var React = require('react/addons');
var ReviewsComponent = require('../code/views/reviewsView.jsx');
var TestUtils = React.addons.TestUtils;

describe('ReviewsComponent', function() {

  it('should render review percentage and review count', function() {
    var reviewView = TestUtils.renderIntoDocument(
      <ReviewsComponent reviewPercentage={98} reviewCount={123} />
    );

    var reviewText = TestUtils.findRenderedDOMComponentWithClass(reviewView, 'ui-component-reviews');
    assert.equal(reviewText.getDOMNode().textContent, '98% would book again(123 Reviews)');
  });

});

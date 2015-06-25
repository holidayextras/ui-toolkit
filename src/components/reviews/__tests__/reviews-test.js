/** @jsx React.DOM */

var React = require('react');
var ReviewsComponent = require('../code/views/reviewsView.jsx');

describe('ReviewsComponent', function() {

  it('should render review percentage and review count', function() {
    var reviewView = TestUtils.renderIntoDocument(
      <ReviewsComponent reviewPercentage={98} reviewCount={123} />
    );

    var reviewText = TestUtils.findRenderedDOMComponentWithClass(reviewView, 'ui-component-reviews');
    assert.equal(reviewText.getDOMNode().textContent, '98% would book again(123 Reviews)');
  });

});

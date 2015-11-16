'use strict';
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var assert = require('chai').assert;
var ReviewsComponent = require('../../src/components/reviews/reviews.jsx');

describe('ReviewsComponent', function() {

  it('should render review percentage and review count', function() {
    var reviewView = TestUtils.renderIntoDocument(
      <ReviewsComponent reviewPercentage={98} reviewCount={123} />
    );

    var reviewText = TestUtils.findRenderedDOMComponentWithClass(reviewView, 'ui-component-reviews');
    assert.equal(reviewText.textContent, '98% would book again(123 Reviews)');
  });

});

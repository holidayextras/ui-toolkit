/** @jsx React.DOM */

jest.dontMock('../code/views/ReviewsComponentView.jsx');

var React = require('react/addons');
var ReviewsComponent = require('../code/views/ReviewsComponentView.jsx');
var TestUtils = React.addons.TestUtils;

describe('ReviewsComponent', function() {

  it('should render review percentage and review count', function() {
    var reviewView = TestUtils.renderIntoDocument(
      <ReviewsComponent reviewPercentage={98} reviewCount={123} />
    );

    var reviewText = TestUtils.findRenderedDOMComponentWithClass(reviewView, 'ui-component-reviews');
    expect(reviewText.getDOMNode().textContent).toEqual('98% would book again(123 Reviews)');
  });

});
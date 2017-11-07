'use strict'

const React = require('react')
const TestUtils = require('react-addons-test-utils')
const assert = require('chai').assert
const ReviewsComponent = require('../../src/components/reviews/reviews.jsx')
const Wrapper = require('../helpers/wrapper')

describe('ReviewsComponent', function () {
  it('should render review percentage and review count', function () {
    const reviewView = TestUtils.renderIntoDocument(
      <Wrapper>
        <ReviewsComponent reviewPercentage={98} reviewCount={123} />
      </Wrapper>
    )

    const reviewText = TestUtils.findRenderedDOMComponentWithClass(reviewView, 'ui-component-reviews')
    assert.equal(reviewText.textContent, '98% would book again(123 Reviews)')
  })
})

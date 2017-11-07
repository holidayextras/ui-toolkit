'use strict'

const React = require('react')
const PropTypes = require('prop-types')

const Reviews = ({
  reviewPercentage,
  reviewCount
}) => (
  <div itemProp='aggregateRating' itemScope itemType='http://schema.org/AggregateRating' className='ui-component-reviews'>
    <meta itemProp='bestRating' content='100' />
    <div><span itemProp='ratingValue'>{reviewPercentage}</span>% would book again</div>
    <div><span itemProp='reviewCount'>({reviewCount}</span> <a title='Customer reviews'>Reviews</a>)</div>
  </div>
)

Reviews.propTypes = {
  reviewPercentage: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired
}

module.exports = Reviews

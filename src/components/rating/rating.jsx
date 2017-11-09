'use strict'

const React = require('react')
const PropTypes = require('prop-types')

const Rating = ({
  children,
  rating,
  outOf,
  blankIcon
}) => {
  const $rating = []
  const $blankRating = []

  const ratingIcon = children || <span className='rating-icon' />
  for (let i = 0; i < rating; i++) {
    $rating.push(ratingIcon.type
      ? React.cloneElement(ratingIcon, { key: i })
      : ratingIcon
    )
  }

  const blankRatingIcon = blankIcon
  if (outOf && blankRatingIcon) {
    for (let j = 0; j < (outOf - rating); j++) {
      $blankRating.push(blankRatingIcon.type
        ? React.cloneElement(blankRatingIcon, { key: j })
        : blankRatingIcon
      )
    }
  }

  return (
    <div className='ui-component-rating'>
      {$rating}
      {$blankRating}
    </div>
  )
}

Rating.propTypes = {
  children: PropTypes.any,
  rating: PropTypes.number.isRequired,
  outOf: PropTypes.number,
  blankIcon: PropTypes.node
}

module.exports = Rating

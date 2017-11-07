'use strict'

const React = require('react')

module.exports = React.createClass({
  propTypes: {
    children: React.PropTypes.any,
    rating: React.PropTypes.number.isRequired,
    outOf: React.PropTypes.number,
    blankIcon: React.PropTypes.node
  },

  render: function () {
    const $rating = []
    const $blankRating = []

    const ratingIcon = this.props.children || <span className='rating-icon' />
    for (let i = 0; i < this.props.rating; i++) {
      $rating.push(ratingIcon.type
        ? React.cloneElement(ratingIcon, { key: i })
        : ratingIcon
      )
    }

    const blankRatingIcon = this.props.blankIcon
    if (this.props.outOf && blankRatingIcon) {
      for (let j = 0; j < (this.props.outOf - this.props.rating); j++) {
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
})

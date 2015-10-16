'use strict';
var React = require('react');

module.exports = React.createClass({
  propTypes: {
    reviewPercentage: React.PropTypes.number.isRequired,
    reviewCount: React.PropTypes.number.isRequired
  },
  render: function() {
    return (
      <div itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating" className="ui-component-reviews">
        <meta itemProp="bestRating" content="100" />
        <div><span itemProp="ratingValue">{ this.props.reviewPercentage }</span>% would book again</div>
        <div><span itemProp="reviewCount">({ this.props.reviewCount }</span> <a title="Customer reviews">Reviews</a>)</div>
      </div>
    );
  }
});

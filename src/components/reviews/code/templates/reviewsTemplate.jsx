'use strict';
var React = require('react');

module.exports = function(props) {
  return (
    <div itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating" className="ui-component-reviews">
      <meta itemProp="bestRating" content="100" />
      <div><span itemProp="ratingValue">{ props.reviewPercentage }</span>% would book again</div>
      <div><span itemProp="reviewCount">({ props.reviewCount }</span> <a title="Customer reviews">Reviews</a>)</div>
    </div>
  );
};

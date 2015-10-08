'use strict';
var React = require('react');

module.exports = function(props) {

  var $rating = [];
  var $blankRating = [];

  for (var i = 0; i < props.rating; i++) {
    $rating.push( props.children ? props.children : <span className="rating-icon" /> );
  }

  if (props.outOf && props.blankIcon) {
    for (var j = 0; j < ( props.outOf - props.rating ); j++) {
      $blankRating.push( props.blankIcon );
    }
  }

  return (
    <div className="ui-component-rating">
      {$rating}
      {$blankRating}
    </div>
  );
};

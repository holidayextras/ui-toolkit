'use strict';
var React = require('react');

module.exports = React.createClass({
  displayName: 'exports',

  propTypes: {
    children: React.PropTypes.any,
    rating: React.PropTypes.number.isRequired,
    outOf: React.PropTypes.number,
    blankIcon: React.PropTypes.node
  },

  render: function render() {
    var $rating = [];
    var $blankRating = [];

    for (var i = 0; i < this.props.rating; i++) {
      $rating.push(this.props.children ? this.props.children : React.createElement('span', { className: 'rating-icon' }));
    }

    if (this.props.outOf && this.props.blankIcon) {
      for (var j = 0; j < this.props.outOf - this.props.rating; j++) {
        $blankRating.push(this.props.blankIcon);
      }
    }

    return React.createElement(
      'div',
      { className: 'ui-component-rating' },
      $rating,
      $blankRating
    );
  }
});

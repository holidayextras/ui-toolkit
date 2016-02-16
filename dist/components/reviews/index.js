'use strict';
var React = require('react');

module.exports = React.createClass({
  displayName: 'exports',

  propTypes: {
    reviewPercentage: React.PropTypes.number.isRequired,
    reviewCount: React.PropTypes.number.isRequired
  },
  render: function render() {
    return React.createElement(
      'div',
      { itemProp: 'aggregateRating', itemScope: true, itemType: 'http://schema.org/AggregateRating', className: 'ui-component-reviews' },
      React.createElement('meta', { itemProp: 'bestRating', content: '100' }),
      React.createElement(
        'div',
        null,
        React.createElement(
          'span',
          { itemProp: 'ratingValue' },
          this.props.reviewPercentage
        ),
        '% would book again'
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'span',
          { itemProp: 'reviewCount' },
          '(',
          this.props.reviewCount
        ),
        ' ',
        React.createElement(
          'a',
          { title: 'Customer reviews' },
          'Reviews'
        ),
        ')'
      )
    );
  }
});

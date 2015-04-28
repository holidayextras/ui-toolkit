var React = require('react');

module.exports = React.createClass({
  propTypes: {
    reviewPercentage: React.PropTypes.number.isRequired,
    reviewCount: React.PropTypes.number.isRequired
  },
  render: function() {
    return require('../templates/ReviewsComponentTemplate.jsx')(this.props);
  }
});
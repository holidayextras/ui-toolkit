var React = require('react');

module.exports = React.createClass({
  propTypes: {
    rating: React.PropTypes.number.isRequired,
    outOf: React.PropTypes.number,
    blankIcon: React.PropTypes.node
  },

  render: function() {
    return require('../templates/ratingTemplate.jsx')(this.props);
  }
});

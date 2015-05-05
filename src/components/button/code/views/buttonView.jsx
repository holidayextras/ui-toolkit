/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({

  propTypes: {
    purpose: React.PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'info']),
    size: React.PropTypes.oneOf(['small', 'large', 'extra-large', 'block'])
  },

  render: function() {
    return require('../templates/buttonTemplate.jsx')(this.props);
  }
});
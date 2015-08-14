var React = require('react');

module.exports = React.createClass({

  propTypes: {
    purpose: React.PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']),
    size: React.PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large', 'block'])
  },

  render: function() {
    return require('../templates/LozengeComponentTemplate.jsx').call(this);
  }
});

var React = require('react');

module.exports = React.createClass({

  propTypes: {
    purpose: React.PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'info']),
    size: React.PropTypes.oneOf(['small', 'large', 'extra-large']),
    position: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
  },

  render: function() {
    return require('../templates/flagTemplate.jsx')(this.props);
  }
});
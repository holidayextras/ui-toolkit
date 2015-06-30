var React = require('react');

module.exports = React.createClass({

  propTypes: {
    purpose: React.PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']),
    size: React.PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large']),
    position: React.PropTypes.oneOf([
      'top',
      'right',
      'bottom',
      'left',
      'top left',
      'bottom left',
      'top right',
      'bottom right',
      'left top',
      'left bottom',
      'right top',
      'right bottom',
      'left right',
      'right left'
    ])
  },

  render: function() {
    return require('../templates/flagTemplate.jsx')(this.props);
  }
});

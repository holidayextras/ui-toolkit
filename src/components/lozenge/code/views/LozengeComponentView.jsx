var React = require('react');

module.exports = React.createClass({

  propTypes: {
    tip: React.PropTypes.string,
    muted: React.PropTypes.bool,
    primary: React.PropTypes.bool,
    success: React.PropTypes.bool,
    info: React.PropTypes.bool,
    warning: React.PropTypes.bool,
    danger: React.PropTypes.bool,
    purpose: React.PropTypes.oneOf(['primary', 'success', 'info', 'warning', 'danger'])
  },

  render: function() {
    return require('../templates/LozengeComponentTemplate.jsx')(this.props);
  }
});

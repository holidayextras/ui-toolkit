var React = require('react');

module.exports = React.createClass({

  propTypes: {
    tip: React.PropTypes.string,
    purpose: React.PropTypes.oneOf(['primary', 'success', 'info', 'warning', 'danger'])
  },

  render: function() {
    return require('../templates/LozengeComponentTemplate.jsx')(this.props);
  }
});

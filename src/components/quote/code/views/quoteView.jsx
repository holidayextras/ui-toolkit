'use strict';
var React = require('react');

module.exports = React.createClass({

  propTypes: {
    purpose: React.PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']),
    size: React.PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large']),
    orientation: React.PropTypes.oneOf(['default', 'horizontal', 'vertical']),
    type: React.PropTypes.oneOf(['block', 'inline'])
  },

  render: function() {
    if (this.props.type === 'inline') {
      return require('../templates/quoteTemplate.jsx').call(this);
    }
    return require('../templates/blockQuoteTemplate.jsx').call(this);
  }
});


/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({

  propTypes: {
    purpose: React.PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']),
    size: React.PropTypes.oneOf(['small', 'medium', 'large', 'extra-large', 'block']),
    disabled: React.PropTypes.bool,
    href: React.PropTypes.string,
    target: React.PropTypes.string,
    handleClick: React.PropTypes.func
  },

  render: function() {
    if(this.props.href) {
      return require('../templates/buttonAnchorTemplate.jsx')(this.props);
    }
    return require('../templates/buttonTemplate.jsx')(this.props);
  }
});

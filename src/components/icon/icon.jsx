'use strict';
var React = require('react');

module.exports = React.createClass({

  propTypes: {
    icon: React.PropTypes.string.isRequired,
    iconFamily: React.PropTypes.oneOf(['font-awesome', 'glyphicon'])
  },

  getDefaultProps: function() {
    return {
      iconFamily: 'font-awesome'
    };
  },

  getIconFamily: function() {
    var iconFamily = this.props.iconFamily;
    if (this.props.iconFamily === 'font-awesome') {
      iconFamily = 'fa';
    }
    return iconFamily;
  },

  getIcon: function() {
    return this.getIconFamily() + '-' + this.props.icon;
  },

  render: function() {

    return (
      <i className={'component-icon ' + this.getIconFamily() + ' ' + this.getIcon()} aria-hidden="true" />
    );
  }
});

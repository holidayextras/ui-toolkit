'use strict';
var React = require('react');

module.exports = React.createClass({
  displayName: 'exports',

  propTypes: {
    icon: React.PropTypes.string.isRequired,
    iconFamily: React.PropTypes.oneOf(['font-awesome', 'glyphicon'])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      iconFamily: 'font-awesome'
    };
  },

  getIconFamily: function getIconFamily() {
    var iconFamily = this.props.iconFamily;
    if (this.props.iconFamily === 'font-awesome') {
      iconFamily = 'fa';
    }
    return iconFamily;
  },

  getIcon: function getIcon() {
    return this.getIconFamily() + '-' + this.props.icon;
  },

  render: function render() {

    return React.createElement('i', { className: 'component-icon ' + this.getIconFamily() + ' ' + this.getIcon(), 'aria-hidden': 'true' });
  }
});

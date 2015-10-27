'use strict';
var React = require('react');

module.exports = React.createClass({

  propTypes: {
    icon: React.PropTypes.string.isRequired,
    iconFamily: React.PropTypes.oneOf(['font-awesome', 'glyphicon'])
  },

  render: function() {
    var icon = this.props.icon;
    var iconFamily = this.props.iconFamily || 'font-awesome';

    if (iconFamily === 'font-awesome') {
      iconFamily = 'fa';
    }

    icon = iconFamily + '-' + icon;

    return (
      <i className={'component-icon ' + iconFamily + ' ' + icon} aria-hidden="true" />
    );
  }
});

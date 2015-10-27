'use strict';
var React = require('react');
var classNames = require('classnames');

module.exports = React.createClass({

  propTypes: {
    children: React.PropTypes.any,
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
    var classes = classNames('component-flag', this.props.size, this.props.purpose, this.props.position);
    return (
      <span className={classes}>
        {this.props.children}
      </span>
    );
  }
});

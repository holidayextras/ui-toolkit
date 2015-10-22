'use strict';
var React = require('react');
var classNames = require('classnames');
var getComponentClasses = require('../../../src/utils/getComponentClasses');

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
    var propClasses = ['size', 'purpose', 'position'];
    var classes = getComponentClasses('component-flag', propClasses, this.props);

    return (
      <span className={classNames(classes)}>
        {this.props.children}
      </span>
    );
  }
});

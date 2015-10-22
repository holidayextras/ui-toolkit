'use strict';
var React = require('react');
var classNames = require('classnames');
var getComponentClasses = require('../../../src/utils/getComponentClasses');

module.exports = React.createClass({

  propTypes: {
    tip: React.PropTypes.string,
    children: React.PropTypes.any,
    purpose: React.PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']),
    size: React.PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large', 'block'])
  },

  render: function() {
    var propClasses = ['size', 'purpose'];
    var classes = getComponentClasses('component-lozenge', propClasses, this.props);

    return (
      <span className={classNames(classes)} title={this.props.tip}>
        {this.props.children}
      </span>
    );
  }
});

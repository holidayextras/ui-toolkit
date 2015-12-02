'use strict';
var React = require('react');
var classNames = require('classnames');

module.exports = React.createClass({

  propTypes: {
    title: React.PropTypes.string,
    children: React.PropTypes.any,
    purpose: React.PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']),
    size: React.PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large'])
  },

  render: function() {
    var classes = classNames('component-alert', this.props.size, this.props.purpose);
    return (
      <div className={classes} role="alert">
        {this.props.title ? <h4>{this.props.title}</h4> : ''}
        <p>{this.props.children}</p>
      </div>
    );
  }
});

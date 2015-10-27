'use strict';
var React = require('react');
var classNames = require('classnames');

module.exports = React.createClass({

  propTypes: {
    children: React.PropTypes.any,
    size: React.PropTypes.string,
    purpose: React.PropTypes.string,
    type: React.PropTypes.string,
    icon: React.PropTypes.string.isRequired
  },

  render: function() {
    var classes = classNames('component-icon-list-item', this.props.size, this.props.purpose, this.props.type);
    return (
      <li className={classes}>
        <i className={'fa fa-fw fa-' + this.props.icon} />{this.props.children}
      </li>
    );
  }
});

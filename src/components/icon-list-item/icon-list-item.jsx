'use strict';
var React = require('react');
var classNames = require('classnames');
var getComponentClasses = require('../../../src/utils/getComponentClasses');

module.exports = React.createClass({

  propTypes: {
    children: React.PropTypes.any,
    icon: React.PropTypes.string.isRequired
  },

  render: function() {
    var propClasses = ['size', 'purpose', 'type'];
    var classes = getComponentClasses('component-icon-list-item', propClasses, this.props);
    return (
      <li className={classNames(classes)}>
        <i className={'fa fa-fw fa-' + this.props.icon} />{this.props.children}
      </li>
    );
  }
});

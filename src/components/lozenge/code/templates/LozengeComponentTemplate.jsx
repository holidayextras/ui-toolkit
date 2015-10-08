'use strict';
var React = require('react');
var classNames = require('classnames');
var getComponentClasses = require('../../../../utils/getComponentClasses');

module.exports = function() {

  var propClasses = ['size', 'purpose'];
  var classes = getComponentClasses('component-lozenge', propClasses, this.props);

  return (
    <span className={classNames(classes)} title={this.props.tip}>
      {this.props.children}
    </span>
  );
};

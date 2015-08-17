var React = require('react');
var classNames = require('classnames');
var getComponentClasses = require('../../../../utils/getComponentClasses');

module.exports = function() {

  var classes = getComponentClasses('component-justified-container');

  return (
    <div style={this.props.styles} className={classNames(classes)}>
      {this.props.children}
    </div>
  );
};

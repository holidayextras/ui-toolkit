var React = require('react');
var classNames = require('classnames');
var getComponentClasses = require('../../../../utils/getComponentClasses');

module.exports = function() {

  var propClasses = ['size', 'purpose'];
  var classes = getComponentClasses('component-alert', propClasses, this.props);

  return (
    <div className={classNames(classes)} role="alert">
      <h4 className="alert-header">{this.props.title}</h4>
      <p>{this.props.children}</p>
    </div>
  );
};

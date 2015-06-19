var classNames = require('classnames');
var getComponentClasses = require('../../../../utils/getComponentClasses');

module.exports = function() {

  var propClasses = ['size', 'purpose'];
  var classes = getComponentClasses('component-button', propClasses, this.props);
  var dataAttributes = this.getDataAttributesFromProps();

  return (
    <a className={classNames(classes)} href={this.props.href} target={this.props.target} onClick={this.props.handleClick} {...dataAttributes}>
      {this.props.children}
    </a>
  );
};

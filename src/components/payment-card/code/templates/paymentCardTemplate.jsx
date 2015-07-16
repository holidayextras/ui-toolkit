var React = require('react');
var classNames = require('classnames');
var getComponentClasses = require('../../../../utils/getComponentClasses');

module.exports = function() {

  var propClasses = ['type', 'size'];
  var classes = getComponentClasses('component-payment-card', propClasses, this.props);

  return (
      <div className={classNames(classes)}></div>
  );
};

var React = require('react');
var classNames = require('classnames');
var getComponentClasses = require('../../../utils/getComponentClasses');

module.exports = React.createClass({

  propTypes: {
    children: React.PropTypes.node,
    purpose: React.PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']),
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
    ]),
    size: React.PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large'])
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

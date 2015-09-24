var React = require('react');
var classNames = require('classnames');
var getComponentClasses = require('../../../utils/getComponentClasses');

module.exports = React.createClass({

  propTypes: {
    purpose: React.PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']),
    size: React.PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large']),
    title: React.PropTypes.string,
    children: React.PropTypes.node
  },

  render: function() {
    var propClasses = ['size', 'purpose'];
    var classes = getComponentClasses('component-alert', propClasses, this.props);

    return (
      <div className={classNames(classes)} role="alert">
        <h4>{this.props.title}</h4>
        <p>{this.props.children}</p>
      </div>
    );
  }
});

var React = require('react');
var DataAttributesMixin = require('react-data-attributes-mixin');
module.exports = React.createClass({

  mixins: [DataAttributesMixin],

  propTypes: {
    purpose: React.PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']),
    size: React.PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large', 'block']),
    disabled: React.PropTypes.bool,
    href: React.PropTypes.string,
    target: React.PropTypes.string,
    handleClick: React.PropTypes.func,
    data: React.PropTypes.object
  },

  render: function() {
    if(this.props.href) {
      return require('../templates/buttonAnchorTemplate.jsx').call(this);
    }
    return require('../templates/buttonTemplate.jsx').call(this);
  }

});

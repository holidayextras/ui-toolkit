var React = require('react');
var DataAttributesMixin = require('react-data-attributes-mixin');

module.exports = React.createClass({

  mixins: [DataAttributesMixin],

  getDefaultProps: function() {
    return {
      href: '#'
    };
  },

  propTypes: {
    purpose: React.PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']),
    size: React.PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large'])
  },

  propTypes: {
    children: React.PropTypes.node,
    data: React.PropTypes.object,
    href: React.PropTypes.string,
    target: React.PropTypes.oneOf(['self', 'blank', 'parent', 'top']),
    title: React.PropTypes.string
  },

  render: function() {
    if(!this.props.children) {
      return null;
    }
    return require('../templates/anchorTemplate.jsx').call(this);
  }
});

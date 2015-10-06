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
    children: React.PropTypes.node,
    data: React.PropTypes.object,
    href: React.PropTypes.string,
    target: React.PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
    title: React.PropTypes.string
  },

  render: function() {
    if(!this.props.children) {
      return null;
    }
    return require('../templates/anchorTemplate.jsx').call(this);
  }
});

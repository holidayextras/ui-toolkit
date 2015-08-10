var React = require('react');
var DataAttributesMixin = require('react-data-attributes-mixin');

module.exports = React.createClass({

  mixins: [DataAttributesMixin],

  propTypes: {
    src: React.PropTypes.string.isRequired,
    alt: React.PropTypes.string.isRequired,
    handleClick: React.PropTypes.func,
    href: React.PropTypes.string
  },

  render: function() {
    if(this.props.href) {
      return require('../templates/imageAnchorTemplate.jsx').call(this);
    }
    return require('../templates/imageTemplate.jsx').call(this);
  }
});

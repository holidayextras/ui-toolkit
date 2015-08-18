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
    data: React.PropTypes.object,
    title: React.PropTypes.string,
    href: React.PropTypes.string
  },

  render: function() {
    return require('../templates/anchorTemplate.jsx').call(this);
  }
});

'use strict';
var React = require('react');

module.exports = React.createClass({

  propTypes: {
    icon: React.PropTypes.string.isRequired
  },

  render: function() {
    return require('../templates/IconListItemComponentTemplate.jsx').call(this);
  }
});

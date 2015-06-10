var React = require('react');

module.exports = React.createClass({
  render: function() {
    return require('../templates/ProductTileComponentTemplate.jsx')(this.props);
  }
});
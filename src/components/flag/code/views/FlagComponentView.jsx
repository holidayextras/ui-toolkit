var React = require('react');

module.exports = React.createClass({
  render: function() {
    return require('../templates/FlagComponentTemplate.jsx')(this.props);
  }
});
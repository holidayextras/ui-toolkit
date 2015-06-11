var React = require('react');

module.exports = React.createClass({
  render: function() {
    return require('../templates/IconListItemComponentTemplate.jsx')(this.props);
  }
});
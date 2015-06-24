var React = require('react');

module.exports = React.createClass({
  render: function() {
    return require('../templates/dateTableHeadTemplate.jsx')(this.props);
  }
});

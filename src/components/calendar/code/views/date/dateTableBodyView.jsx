var React = require('react');

module.exports = React.createClass({

  render: function() {
    return require('../templates/dateTableBodyTemplate.jsx')(this.props);
  }
});

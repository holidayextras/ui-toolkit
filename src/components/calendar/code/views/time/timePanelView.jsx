var React = require('react');

module.exports = React.createClass({

  defaultProps: {
    onSelect: function(){}
  },

  render: function() {
    return require('../templates/timePanelTemplate.jsx')(this.props);
  }
});

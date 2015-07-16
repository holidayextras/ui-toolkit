var React = require('react');

module.exports = React.createClass({

  propTypes: {
    
  },

  render: function() {
    return require('../templates/countdownTemplate.jsx')(this.props);
  }
});

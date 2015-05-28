var React = require('react');

module.exports = React.createClass({

  propTypes: {
    src: React.PropTypes.string.isRequired,
    alt: React.PropTypes.string.isRequired
  },

  render: function() {
    return require('../templates/imageTemplate.jsx')(this.props);
  }
});
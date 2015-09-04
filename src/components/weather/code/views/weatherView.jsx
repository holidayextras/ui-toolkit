var React = require('react');

module.exports = React.createClass({

  propTypes: {
    weather: React.PropTypes.string.isRequired,
    temperature: React.PropTypes.number.isRequired,
    dayOfWeek: React.PropTypes.string.isRequired,
    unit: React.PropTypes.string.isRequired
  },

  render: function() {
    return require('../templates/weatherTemplate.jsx').call(this);
  }
});

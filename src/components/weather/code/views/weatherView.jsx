var React = require('react');
module.exports = React.createClass({

  propTypes: {
    weather: React.PropTypes.oneOf(['cloudy', 'fog', 'hail', 'heavy-rain', 'heavy-snow', 'light-rain', 'light-snow', 'night-clear', 'night-partly-cloudy', 'partly-cloudy', 'storm', 'sunny', 'windy']),
    temperature: React.PropTypes.number.isRequired,
    dayOfWeek: React.PropTypes.oneOf(['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']),
    unit: React.PropTypes.oneOf(['c', 'f'])
  },

  render: function() {
    return require('../templates/weatherTemplate.jsx').call(this);
  }
});

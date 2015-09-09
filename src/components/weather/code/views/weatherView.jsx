var React = require('react');
module.exports = React.createClass({

  propTypes: {
    type: React.PropTypes.oneOf(['cloudy', 'fog', 'hail', 'heavy-rain', 'heavy-snow', 'light-rain', 'light-snow', 'night-clear', 'night-partly-cloudy', 'partly-cloudy', 'storm', 'sunny', 'windy']).isRequired,
    temperature: React.PropTypes.number,
    date: React.PropTypes.string,
    unit: React.PropTypes.oneOf(['c', 'f'])
  },

  render: function() {
    return require('../templates/weatherTemplate.jsx').call(this);
  }
});

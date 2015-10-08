var React = require('react');
var ReactIntl = require('react-intl');

module.exports = React.createClass({

  mixins: [ReactIntl.IntlMixin],

  propTypes: {
    type: React.PropTypes.oneOf(['cloudy', 'fog', 'hail', 'heavy-rain', 'heavy-snow', 'light-rain', 'light-snow', 'night-clear', 'night-partly-cloudy', 'partly-cloudy', 'storm', 'sunny', 'windy']).isRequired,
    temperature: React.PropTypes.number,
    date: React.PropTypes.string,
    unit: React.PropTypes.oneOf(['C', 'F', 'K', 'R']),
    locales: React.PropTypes.array,
    dateFormat: React.PropTypes.shape({
      weekday: React.PropTypes.string,
      day: React.PropTypes.string,
      month: React.PropTypes.string,
      year: React.PropTypes.string
    })
  },

  getDefaultProps: function() {
    return {
      locales: ['en'],
      dateFormat: {
        weekday: 'short'
      }
    }
  },

  render: function() {
    return require('../templates/weatherTemplate.jsx').call(this);
  }
});

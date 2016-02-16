'use strict';
var React = require('react');
var moment = require('moment');
module.exports = React.createClass({
  displayName: 'exports',

  propTypes: {
    format: React.PropTypes.string,
    type: React.PropTypes.oneOf(['cloudy', 'fog', 'hail', 'heavy-rain', 'heavy-snow', 'light-rain', 'light-snow', 'night-clear', 'night-partly-cloudy', 'partly-cloudy', 'storm', 'sunny', 'windy']).isRequired,
    temperature: React.PropTypes.number,
    date: React.PropTypes.string,
    unit: React.PropTypes.oneOf(['C', 'F', 'K', 'R'])
  },

  render: function render() {
    var expectedFormat = ['YYYY-MM-DD', 'YYYY-MM-DDTHH:mm'];
    var displayFormat = this.props.format || 'ddd';
    var date = this.props.date;
    var unit = this.props.unit;
    if (this.props.unit !== 'K') {
      unit = '°' + unit;
    }

    var unitNames = {
      'C': 'Degrees Celsuis',
      'F': 'Degrees Farenheit',
      'K': 'Kelvin',
      'R': 'Degrees Rankine'
    };
    var unitName = unitNames[this.props.unit];

    return React.createElement(
      'div',
      { className: 'component-weather' },
      React.createElement(
        'div',
        { className: this.props.type },
        React.createElement(
          'span',
          null,
          this.props.type
        )
      ),
      this.props.temperature ? React.createElement(
        'div',
        null,
        this.props.temperature,
        React.createElement(
          'abbr',
          { title: unitName },
          unit
        )
      ) : null,
      this.props.date ? React.createElement(
        'div',
        null,
        moment(date, expectedFormat, true).format(displayFormat)
      ) : null
    );
  }
});

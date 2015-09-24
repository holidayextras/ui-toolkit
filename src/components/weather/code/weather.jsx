var moment = require('moment');
var React = require('react');

module.exports = React.createClass({

  propTypes: {
    date: React.PropTypes.string,
    format: React.PropTypes.string,
    temperature: React.PropTypes.number,
    type: React.PropTypes.oneOf(['cloudy', 'fog', 'hail', 'heavy-rain', 'heavy-snow', 'light-rain', 'light-snow', 'night-clear', 'night-partly-cloudy', 'partly-cloudy', 'storm', 'sunny', 'windy']).isRequired,
    unit: React.PropTypes.oneOf(['C', 'F', 'K', 'R'])
  },

  render: function() {
    var expectedFormat = ['YYYY-MM-DD', 'YYYY-MM-DDTHH:mm'];
    var displayFormat = this.props.format || 'ddd';
    var date = this.props.date;
    var unit = this.props.unit;
    if(this.props.unit !== 'K') {
      unit = '°' + unit;
    }

    var unitNames = {
      'C': 'Degrees Celsuis',
      'F': 'Degrees Farenheit',
      'K': 'Kelvin',
      'R': 'Degrees Rankine'
    };
    var unitName = unitNames[this.props.unit];

    return (
      <div className="component-weather">
        <div className={this.props.type}><span>{this.props.type}</span></div>
        {(this.props.temperature) ? <div>{this.props.temperature}<abbr title={unitName}>{unit}</abbr></div> : null}
        {(this.props.date) ? <div>{moment(date, expectedFormat, true).format(displayFormat)}</div> : null}
      </div>
    );
  }
});

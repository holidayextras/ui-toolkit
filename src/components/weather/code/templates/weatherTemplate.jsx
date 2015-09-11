var moment = require('moment');
var React = require('react');

module.exports = function() {

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
};


<span><span class="icon-star" aria-hidden="true"></span>Favorite</span>

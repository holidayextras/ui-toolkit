var moment = require('moment');
var React = require('react');
var ReactIntl = require('react-intl');

module.exports = function() {
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

  debugger;

  return (
    <div className="component-weather">
      <div className={this.props.type}><span>{this.props.type}</span></div>
      {(this.props.temperature) ? <div>{this.props.temperature}<abbr title={unitName}>{unit}</abbr></div> : null}
      <ReactIntl.FormattedDate value={this.props.date} {...this.props.dateFormat} />
    </div>
  );
};

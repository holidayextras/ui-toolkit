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

  return (
    <div className="component-weather" itemScope itemType="http://schema.org/QuantitativeValue">
      <div className={this.props.type}>{this.props.type}</div>
      {(this.props.temperature) ? <div>{this.props.temperature}<span>{unit}</span></div> : null}
      {(this.props.date) ? <div>{moment(date, expectedFormat, true).format(displayFormat)}</div> : null}
    </div>
  );
};

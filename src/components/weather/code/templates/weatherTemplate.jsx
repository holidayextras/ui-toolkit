var React = require('react');

module.exports = function() {

  return (
    <div className="component-weather">
      <div className={this.props.weather}>{this.props.weather}</div>
      <div>{this.props.temperature}&deg;{this.props.unit}</div>
      <div>{this.props.dayOfWeek}</div>
    </div>
  );
};


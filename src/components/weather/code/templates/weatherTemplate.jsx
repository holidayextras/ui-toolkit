var React = require('react');
var classNames = require('classnames');
var getComponentClasses = require('../../../../utils/getComponentClasses');

module.exports = function() {

  // var propClasses = ['size', 'purpose'];
  // var classes = getComponentClasses('component-weather', propClasses, this.props);

  return (
    <div className="component-weather">
      <i className={'fa fa-fw fa-' + this.props.weather} />
      <div>{this.props.temperature}&deg;{this.props.unit}</div>
      <div>{this.props.dayOfWeek}</div>
    </div>
  );
};


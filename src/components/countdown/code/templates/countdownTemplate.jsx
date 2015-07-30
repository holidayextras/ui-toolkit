var React = require('react');
var classNames = require('classnames');
var getComponentClasses = require('../../../../utils/getComponentClasses');

module.exports = function() {

  var propClasses = ['size', 'purpose'];
  var classes = getComponentClasses('component-countdown', propClasses, this.props);

  return (
    <div className={classNames(classes)}>
      <div className='component-countdown-unit'>{this.state.time.days}<small>Days</small></div>
      <div className='component-countdown-unit'>{this.state.time.hours}<small>Hours</small></div>
      <div className='component-countdown-unit'>{this.state.time.minutes}<small>Minutes</small></div>
      <div className='component-countdown-unit'>{this.state.time.seconds}<small>Seconds</small></div>
    </div>
  );
};


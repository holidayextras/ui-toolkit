var React = require('react');
var classNames = require('classnames');
var getComponentClasses = require('../../../../utils/getComponentClasses');

module.exports = function() {

  var propClasses = ['size', 'purpose'];
  var classes = getComponentClasses('component-countdown', propClasses, this.props);

  return (
    <div className={classNames(classes)} role="timer">
      <div>{this.state.time.days} <small>Days</small></div>
      <div>{this.state.time.hours} <small>Hours</small></div>
      <div>{this.state.time.minutes} <small>Minutes</small></div>
      <div>{this.state.time.seconds} <small>Seconds</small></div>
    </div>
  );
};


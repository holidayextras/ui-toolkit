'use strict';
var React = require('react');
var CountdownManager = require('../../../src/components/countdown/lib/countdownManager');
var classNames = require('classnames');

module.exports = React.createClass({

  propTypes: {
    purpose: React.PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']),
    size: React.PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large']),
    until: React.PropTypes.string
  },

  getInitialState: function() {
    return this.countdownManagerState();
  },

  countdownManagerState: function(dateUpdate) {
    var date = { startDate: (dateUpdate || this.props.until) };
    var countdownManager = new CountdownManager(date);
    return {
      countdownManager: countdownManager,
      time: countdownManager.time()
    };
  },

  componentDidMount: function() {
    this.startCountdownManager();
  },

  componentWillUnmount: function() {
    this.stopCountdownManager();
  },

  componentWillReceiveProps: function(nextProps) {
    this.stopCountdownManager();
    this.setState(this.countdownManagerState(nextProps.date), this.startCountdownManager);
  },

  startCountdownManager: function() {
    this.state.countdownManager.start(this.onCountdown);
  },

  onCountdown: function(time) {
    if(this.state.countdownManager.hasDatePassed()) {
      this.state.countdownManager.stop();
    }
    this.setState({ time: time });
  },

  stopCountdownManager: function() {
    return this.state.countdownManager.stop();
  },

  render: function() {
    var classes = classNames('component-countdown', this.props.size, this.props.purpose);
    return (
      <div className={classes} role="timer">
        <div>{this.state.time.days} <small>Days</small></div>
        <div>{this.state.time.hours} <small>Hours</small></div>
        <div>{this.state.time.minutes} <small>Minutes</small></div>
        <div>{this.state.time.seconds} <small>Seconds</small></div>
      </div>
    );
  }
});

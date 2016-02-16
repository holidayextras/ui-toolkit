'use strict';
var React = require('react');
var CountdownManager = require('../../../src/components/countdown/lib/countdownManager');
var classNames = require('classnames');

module.exports = React.createClass({
  displayName: 'exports',

  propTypes: {
    purpose: React.PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']),
    size: React.PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large']),
    until: React.PropTypes.string
  },

  getInitialState: function getInitialState() {
    return this.countdownManagerState();
  },

  countdownManagerState: function countdownManagerState(dateUpdate) {
    var date = { startDate: dateUpdate || this.props.until };
    var countdownManager = new CountdownManager(date);
    return {
      countdownManager: countdownManager,
      time: countdownManager.time()
    };
  },

  componentDidMount: function componentDidMount() {
    this.startCountdownManager();
  },

  componentWillUnmount: function componentWillUnmount() {
    this.stopCountdownManager();
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.stopCountdownManager();
    this.setState(this.countdownManagerState(nextProps.date), this.startCountdownManager);
  },

  startCountdownManager: function startCountdownManager() {
    this.state.countdownManager.start(this.onCountdown);
  },

  onCountdown: function onCountdown(time) {
    this.setState({ time: time });
  },

  stopCountdownManager: function stopCountdownManager() {
    return this.state.countdownManager.stop();
  },

  render: function render() {
    var classes = classNames('component-countdown', this.props.size, this.props.purpose);
    return React.createElement(
      'div',
      { className: classes, role: 'timer' },
      React.createElement(
        'div',
        null,
        this.state.time.days,
        ' ',
        React.createElement(
          'small',
          null,
          'Days'
        )
      ),
      React.createElement(
        'div',
        null,
        this.state.time.hours,
        ' ',
        React.createElement(
          'small',
          null,
          'Hours'
        )
      ),
      React.createElement(
        'div',
        null,
        this.state.time.minutes,
        ' ',
        React.createElement(
          'small',
          null,
          'Minutes'
        )
      ),
      React.createElement(
        'div',
        null,
        this.state.time.seconds,
        ' ',
        React.createElement(
          'small',
          null,
          'Seconds'
        )
      )
    );
  }
});

'use strict';
var React = require('react');
var CountdownManager = require('../lib/countdownManager');

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
    this.setState({ time: time });
  },

  stopCountdownManager: function() {
    return this.state.countdownManager.stop();
  },

  render: function() {
    return require('../templates/countdownTemplate.jsx').call(this);
  }
});

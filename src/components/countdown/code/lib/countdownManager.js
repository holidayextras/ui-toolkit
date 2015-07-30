var countdown = require('./countdown.js');
var moment = require('moment');

var countdownManager = function(date) {
  this.date = date;
};

module.exports = countdownManager;

countdownManager.countdownInterval = 1000;

countdownManager.prototype.start = function(callback) {
  this.intervalId = setInterval(this.intervalCounter(callback), countdownManager.countdownInterval);
};

countdownManager.prototype.stop = function() {
  clearInterval(this.intervalId);
  return moment();
};

countdownManager.prototype.intervalCounter = function(callback) {
  return function() {
    callback(this.time());
  }.bind(this);
};

countdownManager.prototype.countdownDate = function(callback) {
  return (typeof callback === 'function') ? callback(this.date.startDate) : this.date.startDate;
};

countdownManager.prototype.time = function(currentMoment) {
  return countdown.until(this.countdownDate(), currentMoment);
};

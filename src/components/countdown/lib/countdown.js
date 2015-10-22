'use strict';
var moment = require('moment');
var countdown = {};
module.exports = countdown;

countdown.until = function(untilDate) {
  var duration = this._durationFromNow(untilDate);

  return {
    days: this._roundTowardsZero(duration.asDays()),
    hours: this._pad(duration.hours()),
    minutes: this._pad(duration.minutes()),
    seconds: this._pad(duration.seconds())
  };
};

countdown.untilString = function(untilDate) {
  var timeLeft = this.until(untilDate);
  var out = timeLeft.days + ' days';
  out += ', ' + ( timeLeft.hours / 1 ) + ' hours';
  out += ', ' + ( timeLeft.minutes / 1 ) + ' minutes';
  out += ' & ' + ( timeLeft.seconds / 1 ) + ' seconds';
  return out;
};

// Private functions from here
countdown._pad = function(number) {
  number = Math.abs(Math.floor(number));
  if (number > 9) {
    return '' + number;
  }
  return '0' + number;
};

countdown._roundTowardsZero = function(number) {
  if (number > 0) {
    return '' + Math.floor(number);
  }
  return '' + Math.ceil(number);
};

countdown._isSameDay = function(moment1, moment2) {
  return moment(moment1).isSame(moment2, 'day');
};

countdown._durationFromNow = function(untilDate) {
  var until = moment(untilDate);
  var now = moment();
  if (this._isSameDay(until, now)) {
    return moment.duration();
  }
  var seconds = until.diff(now, 'seconds');
  return moment.duration(seconds, 'seconds');
};

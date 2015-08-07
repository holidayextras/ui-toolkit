var moment = require('moment');
var Countdown = {};
module.exports = Countdown;

Countdown.until = function(untilDate) {
  var duration = this._durationFromNow(untilDate);

  return {
    days: this._roundTowardsZero(duration.asDays()),
    hours: this._pad(duration.hours()),
    minutes: this._pad(duration.minutes()),
    seconds: this._pad(duration.seconds())
  };
};

Countdown.untilString = function(untilDate){
  var timeLeft = this.until(untilDate);
  var out = timeLeft.days + ' days';
  out += ', ' + ( timeLeft.hours / 1 ) + ' hours';
  out += ', ' + ( timeLeft.minutes / 1 ) + ' minutes';
  out += ' & ' + ( timeLeft.seconds / 1 ) + ' seconds';
  return out;
};

// Private functions from here
Countdown._pad = function (number) {
  number = Math.abs(Math.floor(number));
  if (number > 9) {
    return '' + number;
  } else {
    return '0' + number;
  }
};

Countdown._roundTowardsZero = function(number) {
  if (number > 0) {
    return '' + Math.floor(number);
  } else {
    return '' + Math.ceil(number);
  }
};

Countdown._isSameDay = function(moment1, moment2) {
  return moment(moment1).isSame(moment2, 'day');
};

Countdown._durationFromNow = function(untilDate) {
  var until = moment(untilDate);
  var now = moment();
  if(this._isSameDay(until, now)) {
    return moment.duration();
  } else {
    var seconds = until.diff(now, 'seconds');
    return moment.duration(seconds, 'seconds');
  }
};

var moment = require('moment');
var Countdown = {};
module.exports = Countdown;

var pad = function (number) {
  number = Math.abs(Math.floor(number));
  if (number > 9) {
    return number;
  } else {
    return '0' + number;
  }
};

var roundTowardsZero = function(number) {
  if (number > 0) {
    return Math.floor(number);
  } else {
    return Math.ceil(number);
  }
};

var isSameDay = function(moment1, moment2) {
  return moment(moment1).isSame(moment2, 'day');
};

var durationFromNow = function(untilDate) {
  var until = moment(untilDate);
  var now = moment();
  if(isSameDay(until, now)) {
    return moment.duration();
  } else {
    var seconds = until.diff(now, 'seconds');
    return moment.duration(seconds, 'seconds');
  }
};

Countdown.until = function(untilDate) {
  var duration = durationFromNow(untilDate);

  return {
    days: roundTowardsZero(duration.asDays()),
    hours: pad(duration.hours()),
    minutes: pad(duration.minutes()),
    seconds: pad(duration.seconds())
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

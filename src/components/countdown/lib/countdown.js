'use strict'

var moment = require('moment')
var countdown = {}
module.exports = countdown

countdown.until = function (untilDate) {
  var duration = this._durationFromNow(untilDate)

  return {
    days: this._roundTowardsZero(duration.asDays()),
    hours: this._pad(duration.hours()),
    minutes: this._pad(duration.minutes()),
    seconds: this._pad(duration.seconds())
  }
}

countdown.untilString = function (untilDate) {
  var timeLeft = this.until(untilDate)
  var out = timeLeft.days + ' days'
  out += ', ' + (timeLeft.hours / 1) + ' hours'
  out += ', ' + (timeLeft.minutes / 1) + ' minutes'
  out += ' & ' + (timeLeft.seconds / 1) + ' seconds'
  return out
}

// Private functions from here
countdown._pad = function (number) {
  var prefix = number < 0 ? '-' : ''
  number = Math.abs(Math.floor(number))
  return prefix + (number > 9 ? '' : '0') + number
}

countdown._roundTowardsZero = function (number) {
  if (number > 0) {
    return '' + Math.floor(number)
  }
  return '' + Math.ceil(number)
}

countdown._durationFromNow = function (untilDate) {
  var until = moment(untilDate)
  var now = moment()
  var seconds = until.diff(now, 'seconds')
  return moment.duration(seconds, 'seconds')
}

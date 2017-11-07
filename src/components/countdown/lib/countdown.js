'use strict'

const moment = require('moment')
const countdown = {}
module.exports = countdown

countdown.until = function (untilDate) {
  const duration = this._durationFromNow(untilDate)

  return {
    days: this._roundTowardsZero(duration.asDays()),
    hours: this._pad(duration.hours()),
    minutes: this._pad(duration.minutes()),
    seconds: this._pad(duration.seconds())
  }
}

countdown.untilString = function (untilDate) {
  const timeLeft = this.until(untilDate)
  let out = timeLeft.days + ' days'
  out += ', ' + (timeLeft.hours / 1) + ' hours'
  out += ', ' + (timeLeft.minutes / 1) + ' minutes'
  out += ' & ' + (timeLeft.seconds / 1) + ' seconds'
  return out
}

// Private functions from here
countdown._pad = function (number) {
  const prefix = number < 0 ? '-' : ''
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
  const until = moment(untilDate)
  const now = moment()
  const seconds = until.diff(now, 'seconds')
  return moment.duration(seconds, 'seconds')
}

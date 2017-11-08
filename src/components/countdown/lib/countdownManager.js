'use strict'

const countdown = require('./countdown.js')
const moment = require('moment')

const CountdownManager = function (date) {
  this.date = date
}

module.exports = CountdownManager

CountdownManager.countdownInterval = 1000

CountdownManager.prototype.start = function (callback) {
  this.intervalId = setInterval(this.intervalCounter(callback), CountdownManager.countdownInterval)
}

CountdownManager.prototype.stop = function () {
  clearInterval(this.intervalId)
  return moment()
}

CountdownManager.prototype.restart = function (date) {
  this.stop()
  if (date) {
    this.date = date
  }
  this.start()
}

CountdownManager.prototype.intervalCounter = function (callback) {
  return function () {
    callback(this.time())
  }.bind(this)
}

CountdownManager.prototype.hasDatePassed = function () {
  return moment(this.countdownDate()).isBefore(moment())
}

CountdownManager.prototype.countdownDate = function (callback) {
  return (typeof callback === 'function') ? callback(this.date.startDate) : this.date.startDate
}

CountdownManager.prototype.time = function (currentMoment) {
  return countdown.until(this.countdownDate(), currentMoment)
}

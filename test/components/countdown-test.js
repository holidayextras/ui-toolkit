'use strict'
const countdown = require('../../src/components/countdown/lib/countdown')
const moment = require('moment')
const assert = require('chai').assert
const sinon = require('sinon')

const dateFormat = 'YYYY-MM-DD'

describe('Countdown tests', function () {
  let futureSeconds = null
  let date = null

  beforeEach(function () {
    futureSeconds = 999999
    date = moment().add(futureSeconds, 'seconds').format(dateFormat)
  })

  describe('until', function () {
    describe('future dates', function () {
      it('returns a formatted date structure', function () {
        const formatted = countdown.until(date)
        const formattedKeys = ['days', 'hours', 'minutes', 'seconds']
        assert.deepEqual(Object.keys(formatted), formattedKeys)
      })

      it('has integer days', function () {
        const days = countdown.until(date).days
        assert.equal(days % 1, 0)
      })

      it('pads hours, minutes, seconds', function () {
        const padded = countdown.until(date)
        const paddedKeys = ['hours', 'minutes', 'seconds']
        paddedKeys.forEach(function (key) {
          assert.equal(padded[key].toString().length, 2)
        })
      })
    })

    it('returns negative day for the past', function () {
      const pastDay = moment().subtract(2, 'days').format(dateFormat)
      assert.ok(countdown.until(pastDay).days < 0)
    })
  })

  describe('untilString', function () {
    before(function () {
      this.originalUntil = countdown.until
      countdown.until = function () {
        return {
          days: 1,
          hours: 2,
          minutes: 3,
          seconds: 4
        }
      }
    })

    after(function () {
      countdown.until = this.originalUntil
    })

    it('returns a string of time left starting with number of days', function () {
      const timeString = countdown.untilString(date)
      assert.equal(timeString, '1 days, 2 hours, 3 minutes & 4 seconds')
    })
  })

  describe('_pad', function () {
    describe('when the number is greater than 9', function () {
      it('returns the number', function () {
        assert.equal(countdown._pad(10), '10')
      })
    })

    describe('when the number is less than 10', function () {
      it('returns the number with a prefix of zero', function () {
        assert.equal(countdown._pad(9), '09')
      })
    })

    describe('when the number is a negative integer', function () {
      it('returns the number with a negation prefix', function () {
        assert.equal(countdown._pad(-5), '-05')
        assert.equal(countdown._pad(-20), '-20')
      })
    })
  })

  describe('_roundTowardsZero', function () {
    describe('when the number is greater than 0', function () {
      it('floors the number', function () {
        assert.equal(countdown._roundTowardsZero(1.9), 1)
      })
    })

    describe('when the number is less than 1', function () {
      it('ceils the number', function () {
        assert.equal(countdown._roundTowardsZero(-1.9), -1)
      })
    })
  })

  describe('_durationFromNow', function () {
    let untilDate = null
    let duration = null
    let clock

    beforeEach(function () {
      clock = sinon.useFakeTimers(new Date(2015, 1, 1).getTime())
    })
    afterEach(function () {
      clock.restore()
    })

    describe('when the untilDate is before today', function () {
      beforeEach(function () {
        untilDate = moment().subtract('10', 'days')
        duration = countdown._durationFromNow(untilDate)
      })

      it('should return 10 days', function () {
        assert.equal(Math.ceil(duration.asDays()), -10)
      })
    })

    describe('when the untilDate is today', function () {
      beforeEach(function () {
        untilDate = moment()
        duration = countdown._durationFromNow(untilDate)
      })

      it('should return 0 days', function () {
        assert.equal(duration.asDays(), 0)
      })
    })

    describe('when the untilDate is after today', function () {
      beforeEach(function () {
        clock = sinon.useFakeTimers(new Date(2015, 1, 1).getTime())
        untilDate = moment().add('10', 'days')
        duration = countdown._durationFromNow(untilDate)
      })
      afterEach(function () {
        return clock.restore()
      })

      it('should return -10 days', function () {
        assert.equal(duration.asDays(), 10)
      })
    })
  })
})

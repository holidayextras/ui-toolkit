'use strict';
var countdown = require('../../src/components/countdown/lib/countdown');
var moment = require('moment');
var assert = require('chai').assert;
var sinon = require('sinon');

var dateFormat = 'YYYY-MM-DD';

describe('Countdown tests', function() {

  var futureSeconds = null;
  var date = null;

  beforeEach(function() {
    futureSeconds = 999999;
    date = moment().add(futureSeconds, 'seconds').format(dateFormat);
  });

  describe('until', function() {

    describe('future dates', function() {

      it('returns a formatted date structure', function() {
        var formatted = countdown.until(date);
        var formattedKeys = ['days', 'hours', 'minutes', 'seconds'];
        assert.deepEqual(Object.keys(formatted), formattedKeys);
      });

      it('has integer days', function() {
        var days = countdown.until(date).days;
        assert.equal(days % 1, 0);
      });

      it('pads hours, minutes, seconds', function() {
        var padded = countdown.until(date);
        var paddedKeys = ['hours', 'minutes', 'seconds'];
        paddedKeys.forEach(function(key) {
          assert.equal(padded[key].toString().length, 2);
        });
      });
    });

    it('returns 0s for the same day', function() {
      var sameDay = moment().add(20, 'seconds').format(dateFormat);
      assert.deepEqual(countdown.until(sameDay), {
        days: '0',
        hours: '00',
        minutes: '00',
        seconds: '00'
      });
    });

    it('returns negative day for the past', function() {
      var pastDay = moment().subtract(2, 'days').format(dateFormat);
      assert.ok(countdown.until(pastDay).days < 0);
    });
  });

  describe('untilString', function() {
    before(function() {
      this.originalUntil = countdown.until;
      countdown.until = function() {
        return {
          days: 1,
          hours: 2,
          minutes: 3,
          seconds: 4
        };
      };
    });

    after(function() {
      countdown.until = this.originalUntil;
    });

    it('returns a string of time left starting with number of days', function() {
      var timeString = countdown.untilString(date);
      assert.equal(timeString, '1 days, 2 hours, 3 minutes & 4 seconds');
    });
  });

  describe('_pad', function() {

    describe('when the number is greater than 9', function() {

      it('returns the number', function() {
        assert.equal(countdown._pad(10), '10');
      });

    });

    describe('when the number is less than 10', function() {

      it('returns the number with a prefix of zero', function() {
        assert.equal(countdown._pad(9), '09');
      });

    });

  });

  describe('_roundTowardsZero', function() {

    describe('when the number is greater than 0', function() {

      it('floors the number', function() {
        assert.equal(countdown._roundTowardsZero(1.9), 1);
      });

    });

    describe('when the number is less than 1', function() {

      it('ceils the number', function() {
        assert.equal(countdown._roundTowardsZero(-1.9), -1);
      });

    });

  });

  describe('_isSameDay', function() {

    var moment1 = null;
    var moment2 = null;

    describe('when the two dates are not the same day', function() {

      beforeEach(function() {
        moment1 = moment('2015-01-01');
        moment2 = moment('2015-01-02');
      });

      it('is false', function() {
        assert.equal(countdown._isSameDay(moment1, moment2), false);
      });

    });

    describe('when the two dates are the same day', function() {

      beforeEach(function() {
        moment1 = moment('2015-01-02');
        moment2 = moment('2015-01-02');
      });

      it('is true', function() {
        assert.equal(countdown._isSameDay(moment1, moment2), true);
      });

    });

  });

  describe('_durationFromNow', function() {

    var untilDate = null;
    var duration = null;

    describe('when the untilDate is before today', function() {

      beforeEach(function() {
        untilDate = moment().subtract('10', 'days');
        duration = countdown._durationFromNow(untilDate);
      });

      it('should return 10 days', function() {
        assert.equal(duration.asDays(), -10);
      });

    });

    describe('when the untilDate is today', function() {

      beforeEach(function() {
        untilDate = moment();
        duration = countdown._durationFromNow(untilDate);
      });

      it('should return 0 days', function() {
        assert.equal(duration.asDays(), 0);
      });

    });

    describe('when the untilDate is after today', function() {
      var clock;
      beforeEach(function() {
        clock = sinon.useFakeTimers(new Date(2015, 1, 1).getTime());
        untilDate = moment().add('10', 'days');
        duration = countdown._durationFromNow(untilDate);
      });
      afterEach(function() {
        return clock.restore();
      });

      it('should return -10 days', function() {
        assert.equal(duration.asDays(), 10);
      });

    });

  });

});

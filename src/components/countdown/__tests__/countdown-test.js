var countdown = require('../code/lib/countdown.js');
var moment = require('moment');
// var expect = require('expect.js');

var dateFormat = 'YYYY-MM-DD';

describe('until', function() {
  describe('future dates', function() {
    beforeEach(function() {
      var futureSeconds = 999999;
      this.date = moment().add(futureSeconds, 'seconds').format(dateFormat);
    });

    it('returns a formatted date structure', function() {
      var formatted = countdown.until(this.date);
      var formattedKeys = ['days', 'hours', 'minutes', 'seconds'];
      assert.deepEqual(Object.keys(formatted), formattedKeys);
    });

    it('has integer days', function() {
      var days = countdown.until(this.date).days;
      assert.equal(days % 1, 0)
    });

    it('pads hours, minutes, seconds', function() {
      var padded = countdown.until(this.date);
      var paddedKeys = ['hours', 'minutes', 'seconds'];
      paddedKeys.forEach(function(key) {
        assert.equal(padded[key].toString().length, 2);
      });
    });
  });

  it('returns 0s for the same day', function() {
    var sameDay = moment().add(20, 'seconds').format(dateFormat);
    assert.deepEqual(countdown.until(sameDay), {
      days: 0,
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
    var timeString = countdown.untilString(this.date);
    assert.equal(timeString, '1 days, 2 hours, 3 minutes & 4 seconds');
  });
});

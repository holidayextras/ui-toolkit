var CountdownManager = require('../code/lib/countdownManager');
var moment = require('moment');
var Moment = moment().constructor;
var sinon = require('sinon');

describe('Countdown Manager', function() {
  before(function() {
    this.timer = sinon.useFakeTimers();
  });

  beforeEach(function() {
    this.CountdownManager = new CountdownManager('2016-07-27');
    this.callback = sinon.spy();
  });

  after(function() {
    this.timer.restore();
  });

  it('.start sets interval countdown', function() {
    this.CountdownManager.start(this.callback);
    this.timer.tick(CountdownManager.countdownInterval);
    assert.equal(this.callback.called, true);
    // expect(this.callback.called).to.be(true);
  });

  it('.stop clears interval countdown and returns moment', function() {
    this.CountdownManager.start(this.callback);
    var stopMoment = this.CountdownManager.stop();
    this.timer.tick(CountdownManager.countdownInterval);
    assert.ok(stopMoment instanceof Moment);
    assert.equal(this.callback.called, false);
  });
});

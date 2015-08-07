var CountdownManager = require('../code/lib/countdownManager');
var moment = require('moment');
var Moment = moment().constructor;
var sinon = require('sinon');

describe('Countdown Manager', function() {

  var timer = null;
  var countdownManager = null;
  var callbackSpy = null;

  before(function() {
    timer = sinon.useFakeTimers();
  });

  beforeEach(function() {
    countdownManager = new CountdownManager('2016-07-27');
    callbackSpy = sinon.spy();
  });

  after(function() {
    timer.restore();
  });

  describe('start', function () {

    beforeEach(function () {
      countdownManager.start(callbackSpy);
      timer.tick(CountdownManager.countdownInterval);
    });

    it('sets interval countdown', function () {
      assert.ok(callbackSpy.called);
    });

  });

  describe('stop', function () {

    beforeEach(function () {
      countdownManager.stop(callbackSpy);
      timer.tick(CountdownManager.countdownInterval);
    });

    it('clears interval countdown', function() {
      assert.equal(callbackSpy.called, false);
    });

    it('returns an instance of moment', function() {
      assert.ok(countdownManager.stop() instanceof Moment);
    });

  });

  describe('intervalCounter', function () {
    beforeEach(function () {

    });
  });

  describe('countdownDate', function () {

  });

  describe('time', function () {

  });

  // it('.start sets interval countdown', function() {
  //   this.CountdownManager.start(this.callback);
  //   this.timer.tick(CountdownManager.countdownInterval);
  //   assert.equal(this.callback.called, true);
  // });

  // it('.stop clears interval countdown and returns moment', function() {
  //   this.CountdownManager.start(this.callback);
  //   var stopMoment = this.CountdownManager.stop();
  //   this.timer.tick(CountdownManager.countdownInterval);
  //   assert.ok(stopMoment instanceof Moment);
  //   assert.equal(this.callback.called, false);
  // });

});

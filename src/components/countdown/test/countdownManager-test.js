'use strict';
var CountdownManager = require('../lib/countdownManager');
var countdown = require('../lib/countdown');
var assert = require('chai').assert;
var moment = require('moment');
var Moment = moment().constructor;
var sinon = require('sinon');

describe('Countdown Manager', function() {

  var timer = null;
  var date = null;
  var countdownManager = null;
  var callbackSpy = null;

  before(function() {
    timer = sinon.useFakeTimers();
  });

  beforeEach(function() {
    date = {
      startDate: '2016-07-27'
    };
    countdownManager = new CountdownManager(date);
    callbackSpy = sinon.spy();
  });

  after(function() {
    timer.restore();
  });

  describe('start', function() {

    beforeEach(function() {
      countdownManager.start(callbackSpy);
      timer.tick(CountdownManager.countdownInterval);
    });

    it('sets interval countdown', function() {
      assert.ok(callbackSpy.called);
    });

  });

  describe('stop', function() {

    beforeEach(function() {
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

  describe('intervalCounter', function() {

    var intervalFunction = null;

    beforeEach(function() {
      sinon.stub(countdownManager, 'time').returns('test');
      intervalFunction = countdownManager.intervalCounter(callbackSpy);
      intervalFunction();
    });

    it('returns a callback', function() {
      assert.ok(callbackSpy.called);
    });

    it('the callback passes through the value of the time function', function() {
      assert.ok(callbackSpy.calledWith('test'));
    });

  });

  describe('countdownDate', function() {

    describe('when a callback is provided', function() {

      beforeEach(function() {
        countdownManager.countdownDate(callbackSpy);
      });

      it('calls back with startDate', function() {
        assert.ok(callbackSpy.calledWith(date.startDate));
      });

    });

    describe('when no callback is provided', function() {

      var result = null;

      beforeEach(function() {
        result = countdownManager.countdownDate();
      });

      it('returns startDate', function() {
        assert.equal(result, date.startDate);
      });

    });

  });

  describe('time', function() {

    var countdownUntilStub = null;
    var countdownDateValue = null;
    var currentMoment = null;

    beforeEach(function() {
      countdownUntilStub = sinon.stub(countdown, 'until');
      sinon.stub(countdownManager, 'countdownDate').returns(countdownDateValue);

      currentMoment = 'test';
      countdownManager.time(currentMoment);
    });

    it('calls countdown until with countdownDate & currentMoment', function() {
      assert.ok(countdownUntilStub.calledWith(countdownDateValue, currentMoment));
    });
  });

});

'use strict';
var React = require('react/addons');
var sinon = require('sinon');
var assert = require('chai').assert;
var CountdownComponent = require('../countdown.jsx');
var CountdownManager = require('../lib/countdownManager');
var TestUtils = require('react-addons-test-utils');


describe('CountdownComponent', function() {
  var clock = null;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    sinon.stub(CountdownManager.prototype, 'time').returns(123);
  });
  afterEach(function() {
    clock.restore();
    CountdownManager.prototype.time.restore();
  });

  it('should render a countdown timer', function() {
    var countdown = TestUtils.renderIntoDocument(
      <CountdownComponent until="2016-07-27" />
    );
    assert.equal(countdown.props.until, '2016-07-27');
  });

  it('check the countdown mnagaer states time is set correctly', function() {
    var date = '2016-07-27';
    var countdown = TestUtils.renderIntoDocument(
      <CountdownComponent until={date} />
    );
    assert.equal(countdown.state.time, 123);
  });

  describe('ARIA', function() {
    it('should include a timer role', function() {
      var date = '2016-07-27';
      var countdown = TestUtils.renderIntoDocument(
        <CountdownComponent until={date} />
      );
      var renderedCountdown = TestUtils.findRenderedDOMComponentWithClass(countdown, 'component-countdown');
      assert.equal(renderedCountdown.getAttribute('role'), 'timer');
    });
  });
});

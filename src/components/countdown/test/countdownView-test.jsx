'use strict'

const React = require('react')
const sinon = require('sinon')
const assert = require('chai').assert
const CountdownComponent = require('../countdown.jsx')
const CountdownManager = require('../lib/countdownManager')
const TestUtils = require('react-addons-test-utils')

describe('CountdownComponent', function () {
  let clock = null

  beforeEach(function () {
    clock = sinon.useFakeTimers()
    sinon.stub(CountdownManager.prototype, 'time').returns(123)
  })
  afterEach(function () {
    clock.restore()
    CountdownManager.prototype.time.restore()
  })

  it('should render a countdown timer', function () {
    const countdown = TestUtils.renderIntoDocument(
      <CountdownComponent until='2016-07-27' />
    )
    assert.equal(countdown.props.until, '2016-07-27')
  })

  it('check the countdown manager states time is set correctly', function () {
    const date = '2016-07-27'
    const countdown = TestUtils.renderIntoDocument(
      <CountdownComponent until={date} />
    )
    assert.equal(countdown.state.time, 123)
  })

  describe('ARIA', function () {
    it('should include a timer role', function () {
      const date = '2016-07-27'
      const countdown = TestUtils.renderIntoDocument(
        <CountdownComponent until={date} />
      )
      const renderedCountdown = TestUtils.findRenderedDOMComponentWithClass(countdown, 'component-countdown')
      assert.equal(renderedCountdown.getAttribute('role'), 'timer')
    })
  })
})

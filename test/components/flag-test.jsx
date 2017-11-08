'use strict'
const React = require('react')
const TestUtils = require('react-addons-test-utils')
const assert = require('chai').assert
const FlagComponent = require('../../src/components/flag/flag.jsx')

describe('FlagComponent', function () {
  it('should render a Flag', function () {
    const flag = TestUtils.renderIntoDocument(
      <FlagComponent>Special Offer</FlagComponent>
    )

    const renderedFlag = TestUtils.findRenderedDOMComponentWithClass(flag, 'component-flag')
    assert.equal(renderedFlag.textContent, 'Special Offer')
  })

  it('should render a default flag', function () {
    const defaultFlag = TestUtils.renderIntoDocument(
      <FlagComponent size='default'>Special Offer</FlagComponent>
    )

    const renderedFlag = TestUtils.findRenderedDOMComponentWithClass(defaultFlag, 'default')
    assert.isDefined(renderedFlag)
  })

  it('should render a danger flag', function () {
    const dangerFlag = TestUtils.renderIntoDocument(
      <FlagComponent purpose='danger'>Special Offer</FlagComponent>
    )

    const renderedFlag = TestUtils.findRenderedDOMComponentWithClass(dangerFlag, 'danger')
    assert.isDefined(renderedFlag)
  })

  it('should render a medium flag', function () {
    const mediumFlag = TestUtils.renderIntoDocument(
      <FlagComponent size='medium'>Special Offer</FlagComponent>
    )

    const renderedFlag = TestUtils.findRenderedDOMComponentWithClass(mediumFlag, 'medium')
    assert.isDefined(renderedFlag)
  })

  it('should render a large flag', function () {
    const largeFlag = TestUtils.renderIntoDocument(
      <FlagComponent size='large'>Special Offer</FlagComponent>
    )

    const renderedFlag = TestUtils.findRenderedDOMComponentWithClass(largeFlag, 'large')
    assert.isDefined(renderedFlag)
  })

  it('should render a flag on the right', function () {
    const rightFlag = TestUtils.renderIntoDocument(
      <FlagComponent position='right'>Special Offer</FlagComponent>
    )

    const renderedFlag = TestUtils.findRenderedDOMComponentWithClass(rightFlag, 'right')
    assert.isDefined(renderedFlag)
  })

  it('should render a small secondary right flag', function () {
    const smallSecondaryRightFlag = TestUtils.renderIntoDocument(
      <FlagComponent size='small' purpose='secondary' position='right'>Book Now</FlagComponent>
    )

    const renderedFlag = TestUtils.findRenderedDOMComponentWithClass(smallSecondaryRightFlag, 'small secondary right')
    assert.isDefined(renderedFlag)
  })
})

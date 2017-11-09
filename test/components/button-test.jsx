'use strict'

const React = require('react')
const TestUtils = require('react-addons-test-utils')
const assert = require('chai').assert
const sinon = require('sinon')
const ButtonView = require('../../src/components/button/button.jsx')

describe('ButtonComponent', function () {
  it('should render button', function () {
    const button = TestUtils.renderIntoDocument(
      <ButtonView>Book Now</ButtonView>
    )

    const renderedButton = TestUtils.findRenderedDOMComponentWithClass(button, 'component-button')
    assert.equal(renderedButton.textContent, 'Book Now')
  })

  it('should render a primary button', function () {
    const primaryButton = TestUtils.renderIntoDocument(
      <ButtonView purpose='primary'>Book Now</ButtonView>
    )

    const renderedButton = TestUtils.findRenderedDOMComponentWithClass(primaryButton, 'primary')
    assert.isDefined(renderedButton)
  })

  it('should render a default button', function () {
    const defaultButton = TestUtils.renderIntoDocument(
      <ButtonView size='default'>Book Now</ButtonView>
    )

    const renderedButton = TestUtils.findRenderedDOMComponentWithClass(defaultButton, 'default')
    assert.isDefined(renderedButton)
  })

  it('should render a medium button', function () {
    const mediumButton = TestUtils.renderIntoDocument(
      <ButtonView size='medium'>Book Now</ButtonView>
    )

    const renderedButton = TestUtils.findRenderedDOMComponentWithClass(mediumButton, 'medium')
    assert.isDefined(renderedButton)
  })

  it('should render a large button', function () {
    const largeButton = TestUtils.renderIntoDocument(
      <ButtonView size='large'>Book Now</ButtonView>
    )

    const renderedButton = TestUtils.findRenderedDOMComponentWithClass(largeButton, 'large')
    assert.isDefined(renderedButton)
  })

  it('should render a small secondary button', function () {
    const smallSecondaryButton = TestUtils.renderIntoDocument(
      <ButtonView size='small' purpose='secondary'>Book Now</ButtonView>
    )

    const renderedButton = TestUtils.findRenderedDOMComponentWithClass(smallSecondaryButton, 'small secondary')
    assert.isDefined(renderedButton)
  })

  it('should render as an anchor if href is present', function () {
    const anchor = TestUtils.renderIntoDocument(
      <ButtonView href='http://www.ui-toolkit.com'>Go to Toolkit</ButtonView>
    )

    const renderedButton = TestUtils.findRenderedDOMComponentWithTag(anchor, 'a')
    assert.isDefined(renderedButton)
  })

  it('should render with an id if present', function () {
    const buttonWithID = TestUtils.renderIntoDocument(
      <ButtonView id='my-id'>Book Now</ButtonView>
    )

    const renderedButton = TestUtils.findRenderedDOMComponentWithClass(buttonWithID, 'component-button')
    assert.equal(renderedButton.id, 'my-id')
  })

  it('should render any extra props passed to it', function () {
    const onMouseOverHandler = sinon.stub()

    const button = TestUtils.renderIntoDocument(
      <ButtonView onMouseOver={onMouseOverHandler}>Book Now</ButtonView>
    )

    const renderedButton = TestUtils.findRenderedDOMComponentWithClass(button, 'component-button')
    TestUtils.Simulate.mouseOver(renderedButton)
    assert(onMouseOverHandler.called)
  })

  context('click events', function () {
    it('should add click event when onClick passed to it', function () {
      const onClick = sinon.stub()

      const button = TestUtils.renderIntoDocument(
        <ButtonView onClick={onClick}>Book Now</ButtonView>
      )

      const renderedButton = TestUtils.findRenderedDOMComponentWithClass(button, 'component-button')
      TestUtils.Simulate.click(renderedButton)
      assert(onClick.called)
    })

    it('should add click event when legacy handleClick passed to it', function () {
      const handleClick = sinon.stub()

      const button = TestUtils.renderIntoDocument(
        <ButtonView handleClick={handleClick}>Book Now</ButtonView>
      )

      const renderedButton = TestUtils.findRenderedDOMComponentWithClass(button, 'component-button')
      TestUtils.Simulate.click(renderedButton)
      assert(handleClick.called)
    })
  })
})

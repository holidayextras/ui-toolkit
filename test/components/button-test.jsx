'use strict'
var React = require('react')
var TestUtils = require('react-addons-test-utils')
var assert = require('chai').assert
var sinon = require('sinon')
var ButtonView = require('../../src/components/button/button.jsx')

describe('ButtonComponent', function () {
  it('should render button', function () {
    var button = TestUtils.renderIntoDocument(
      <ButtonView>Book Now</ButtonView>
    )

    var renderedButton = TestUtils.findRenderedDOMComponentWithClass(button, 'component-button')
    assert.equal(renderedButton.textContent, 'Book Now')
  })

  it('should render a primary button', function () {
    var primaryButton = TestUtils.renderIntoDocument(
      <ButtonView purpose='primary'>Book Now</ButtonView>
    )

    var renderedButton = TestUtils.findRenderedDOMComponentWithClass(primaryButton, 'primary')
    assert.isDefined(renderedButton)
  })

  it('should render a default button', function () {
    var defaultButton = TestUtils.renderIntoDocument(
      <ButtonView size='default'>Book Now</ButtonView>
    )

    var renderedButton = TestUtils.findRenderedDOMComponentWithClass(defaultButton, 'default')
    assert.isDefined(renderedButton)
  })

  it('should render a medium button', function () {
    var mediumButton = TestUtils.renderIntoDocument(
      <ButtonView size='medium'>Book Now</ButtonView>
    )

    var renderedButton = TestUtils.findRenderedDOMComponentWithClass(mediumButton, 'medium')
    assert.isDefined(renderedButton)
  })

  it('should render a large button', function () {
    var largeButton = TestUtils.renderIntoDocument(
      <ButtonView size='large'>Book Now</ButtonView>
    )

    var renderedButton = TestUtils.findRenderedDOMComponentWithClass(largeButton, 'large')
    assert.isDefined(renderedButton)
  })

  it('should render a small secondary button', function () {
    var smallSecondaryButton = TestUtils.renderIntoDocument(
      <ButtonView size='small' purpose='secondary'>Book Now</ButtonView>
    )

    var renderedButton = TestUtils.findRenderedDOMComponentWithClass(smallSecondaryButton, 'small secondary')
    assert.isDefined(renderedButton)
  })

  it('should render as an anchor if href is present', function () {
    var anchor = TestUtils.renderIntoDocument(
      <ButtonView href='http://www.ui-toolkit.com'>Go to Toolkit</ButtonView>
    )

    var renderedButton = TestUtils.findRenderedDOMComponentWithTag(anchor, 'a')
    assert.isDefined(renderedButton)
  })

  it('should render with an id if present', function () {
    var buttonWithID = TestUtils.renderIntoDocument(
      <ButtonView id='my-id'>Book Now</ButtonView>
    )

    var renderedButton = TestUtils.findRenderedDOMComponentWithClass(buttonWithID, 'component-button')
    assert.equal(renderedButton.id, 'my-id')
  })

  it('should render any extra props passed to it', function () {
    const onMouseOverHandler = sinon.stub()

    var button = TestUtils.renderIntoDocument(
      <ButtonView onMouseOver={onMouseOverHandler}>Book Now</ButtonView>
    )

    var renderedButton = TestUtils.findRenderedDOMComponentWithClass(button, 'component-button')
    TestUtils.Simulate.mouseOver(renderedButton)
    assert(onMouseOverHandler.called)
  })

  context('click events', function () {
    it('should add click event when onClick passed to it', function () {
      const onClick = sinon.stub()

      var button = TestUtils.renderIntoDocument(
        <ButtonView onClick={onClick}>Book Now</ButtonView>
      )

      var renderedButton = TestUtils.findRenderedDOMComponentWithClass(button, 'component-button')
      TestUtils.Simulate.click(renderedButton)
      assert(onClick.called)
    })

    it('should add click event when legacy handleClick passed to it', function () {
      const handleClick = sinon.stub()

      var button = TestUtils.renderIntoDocument(
        <ButtonView handleClick={handleClick}>Book Now</ButtonView>
      )

      var renderedButton = TestUtils.findRenderedDOMComponentWithClass(button, 'component-button')
      TestUtils.Simulate.click(renderedButton)
      assert(handleClick.called)
    })
  })
})

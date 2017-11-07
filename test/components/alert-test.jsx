'use strict'
const React = require('react')
const TestUtils = require('react-addons-test-utils')
const assert = require('chai').assert
const AlertComponent = require('../../src/components/alert/alert.jsx')

describe('AlertComponent', function () {
  it('should render an Alert', function () {
    const alert = TestUtils.renderIntoDocument(
      <AlertComponent>I am content</AlertComponent>
    )

    const renderedAlert = TestUtils.findRenderedDOMComponentWithClass(alert, 'component-alert')
    assert.equal(renderedAlert.textContent, 'I am content')
  })

  it('should render an alert without a H4 if title is no passed in', function () {
    const successAlert = TestUtils.renderIntoDocument(
      <AlertComponent purpose='success' title='title'>You have been successful</AlertComponent>
    )
    const h4 = TestUtils.scryRenderedDOMComponentsWithTag(successAlert, 'h4')
    assert.equal(h4.length, 1)
  })

  it('should render an alert with a H4 if title is passed in', function () {
    const successAlert = TestUtils.renderIntoDocument(
      <AlertComponent purpose='success'>You have been successful</AlertComponent>
    )
    const h4 = TestUtils.scryRenderedDOMComponentsWithTag(successAlert, 'h4')
    assert.equal(h4.length, 0)
  })

  it('should render a success alert', function () {
    const successAlert = TestUtils.renderIntoDocument(
      <AlertComponent purpose='success'>You have been successful</AlertComponent>
    )

    const renderedAlert = TestUtils.findRenderedDOMComponentWithClass(successAlert, 'success')
    assert.isDefined(renderedAlert)
  })

  it('should render a danger alert', function () {
    const dangerAlert = TestUtils.renderIntoDocument(
      <AlertComponent purpose='danger'>This is dangerous</AlertComponent>
    )

    const renderedAlert = TestUtils.findRenderedDOMComponentWithClass(dangerAlert, 'danger')
    assert.isDefined(renderedAlert)
  })

  it('should render a info alert', function () {
    const infoAlert = TestUtils.renderIntoDocument(
      <AlertComponent purpose='info'>This is information</AlertComponent>
    )

    const renderedAlert = TestUtils.findRenderedDOMComponentWithClass(infoAlert, 'info')
    assert.isDefined(renderedAlert)
  })

  it('should render a warning alert', function () {
    const warningAlert = TestUtils.renderIntoDocument(
      <AlertComponent purpose='warning'>You have been warned</AlertComponent>
    )

    const renderedAlert = TestUtils.findRenderedDOMComponentWithClass(warningAlert, 'warning')
    assert.isDefined(renderedAlert)
  })

  it('should render a large default alert', function () {
    const largeAlert = TestUtils.renderIntoDocument(
      <AlertComponent size='large'>I am large</AlertComponent>
    )

    const renderedAlert = TestUtils.findRenderedDOMComponentWithClass(largeAlert, 'large')
    assert.isDefined(renderedAlert)
  })

  it('should render an alert with a header', function () {
    const alert = TestUtils.renderIntoDocument(
      <AlertComponent title='Header' />
    )

    const renderedAlert = TestUtils.findRenderedDOMComponentWithClass(alert, 'component-alert')
    assert.equal(renderedAlert.textContent, 'Header')
  })
})

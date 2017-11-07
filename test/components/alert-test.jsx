'use strict'

const React = require('react')
const TestUtils = require('react-addons-test-utils')
const assert = require('chai').assert
const AlertComponent = require('../../src/components/alert/alert.jsx')
const Wrapper = require('../helpers/wrapper')

describe('AlertComponent', function () {
  it('should render an Alert', function () {
    const alert = TestUtils.renderIntoDocument(
      <Wrapper><AlertComponent>I am content</AlertComponent></Wrapper>
    )

    const renderedAlert = TestUtils.findRenderedDOMComponentWithClass(alert, 'component-alert')
    assert.equal(renderedAlert.textContent, 'I am content')
  })

  it('should render an alert without a H4 if title is no passed in', function () {
    const successAlert = TestUtils.renderIntoDocument(
      <Wrapper><AlertComponent purpose='success' title='title'>You have been successful</AlertComponent></Wrapper>
    )
    const h4 = TestUtils.scryRenderedDOMComponentsWithTag(successAlert, 'h4')
    assert.equal(h4.length, 1)
  })

  it('should render an alert with a H4 if title is passed in', function () {
    const successAlert = TestUtils.renderIntoDocument(
      <Wrapper><AlertComponent purpose='success'>You have been successful</AlertComponent></Wrapper>
    )
    const h4 = TestUtils.scryRenderedDOMComponentsWithTag(successAlert, 'h4')
    assert.equal(h4.length, 0)
  })

  it('should render a success alert', function () {
    const successAlert = TestUtils.renderIntoDocument(
      <Wrapper><AlertComponent purpose='success'>You have been successful</AlertComponent></Wrapper>
    )

    const renderedAlert = TestUtils.findRenderedDOMComponentWithClass(successAlert, 'success')
    assert.isDefined(renderedAlert)
  })

  it('should render a danger alert', function () {
    const dangerAlert = TestUtils.renderIntoDocument(
      <Wrapper><AlertComponent purpose='danger'>This is dangerous</AlertComponent></Wrapper>
    )

    const renderedAlert = TestUtils.findRenderedDOMComponentWithClass(dangerAlert, 'danger')
    assert.isDefined(renderedAlert)
  })

  it('should render a info alert', function () {
    const infoAlert = TestUtils.renderIntoDocument(
      <Wrapper><AlertComponent purpose='info'>This is information</AlertComponent></Wrapper>
    )

    const renderedAlert = TestUtils.findRenderedDOMComponentWithClass(infoAlert, 'info')
    assert.isDefined(renderedAlert)
  })

  it('should render a warning alert', function () {
    const warningAlert = TestUtils.renderIntoDocument(
      <Wrapper><AlertComponent purpose='warning'>You have been warned</AlertComponent></Wrapper>
    )

    const renderedAlert = TestUtils.findRenderedDOMComponentWithClass(warningAlert, 'warning')
    assert.isDefined(renderedAlert)
  })

  it('should render a large default alert', function () {
    const largeAlert = TestUtils.renderIntoDocument(
      <Wrapper><AlertComponent size='large'>I am large</AlertComponent></Wrapper>
    )

    const renderedAlert = TestUtils.findRenderedDOMComponentWithClass(largeAlert, 'large')
    assert.isDefined(renderedAlert)
  })

  it('should render an alert with a header', function () {
    const alert = TestUtils.renderIntoDocument(
      <Wrapper><AlertComponent title='Header' /></Wrapper>
    )

    const renderedAlert = TestUtils.findRenderedDOMComponentWithClass(alert, 'component-alert')
    assert.equal(renderedAlert.textContent, 'Header')
  })
})

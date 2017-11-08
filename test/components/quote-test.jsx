'use strict'
const React = require('react')
const TestUtils = require('react-addons-test-utils')
const assert = require('chai').assert
const QuoteComponent = require('../../src/components/quote/quote.jsx')

describe('QuoteComponent', function () {
  it('should render an Quote', function () {
    const quote = TestUtils.renderIntoDocument(
      <QuoteComponent>I am content</QuoteComponent>
    )

    const renderedQuote = TestUtils.findRenderedDOMComponentWithClass(quote, 'component-quote')
    assert.equal(renderedQuote.textContent, 'I am content')
  })

  it('should render a danger quote', function () {
    const dangerQuote = TestUtils.renderIntoDocument(
      <QuoteComponent purpose='danger'>This is dangerous</QuoteComponent>
    )

    const renderedQuote = TestUtils.findRenderedDOMComponentWithClass(dangerQuote, 'danger')
    assert.isDefined(renderedQuote)
  })

  it('should render a success quote', function () {
    const successQuote = TestUtils.renderIntoDocument(
      <QuoteComponent purpose='success'>This is information</QuoteComponent>
    )

    const renderedQuote = TestUtils.findRenderedDOMComponentWithClass(successQuote, 'success')
    assert.isDefined(renderedQuote)
  })

  it('should render a quote with a cite', function () {
    const citeQuote = TestUtils.renderIntoDocument(
      <QuoteComponent cite='Twitter' />
    )

    const renderedQuote = TestUtils.findRenderedDOMComponentWithClass(citeQuote, 'component-quote')
    assert.equal(renderedQuote.textContent, 'Twitter')
  })

  it('should render a quote with an author', function () {
    const authorQuote = TestUtils.renderIntoDocument(
      <QuoteComponent author='Timmy Test' />
    )

    const renderedQuote = TestUtils.findRenderedDOMComponentWithClass(authorQuote, 'component-quote')
    assert.equal(renderedQuote.textContent, 'Timmy Test')
  })

  it('should render a quote with a role', function () {
    const roleQuote = TestUtils.renderIntoDocument(
      <QuoteComponent role='Developer' />
    )

    const renderedQuote = TestUtils.findRenderedDOMComponentWithClass(roleQuote, 'component-quote')
    assert.equal(renderedQuote.textContent, 'Developer')
  })

  it('should render a quote with a role', function () {
    const inlineQuote = TestUtils.renderIntoDocument(
      <QuoteComponent type='inline'>Inline Quote</QuoteComponent>
    )

    const renderedQuote = TestUtils.findRenderedDOMComponentWithClass(inlineQuote, 'inline')
    assert.equal(renderedQuote.textContent, 'Inline Quote')
  })
})

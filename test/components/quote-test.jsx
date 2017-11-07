'use strict'

const React = require('react')
const TestUtils = require('react-addons-test-utils')
const assert = require('chai').assert
const QuoteComponent = require('../../src/components/quote/quote.jsx')
const Wrapper = require('../helpers/wrapper')

describe('QuoteComponent', function () {
  it('should render an Quote', function () {
    const quote = TestUtils.renderIntoDocument(
      <Wrapper>
        <QuoteComponent>I am content</QuoteComponent>
      </Wrapper>
    )

    const renderedQuote = TestUtils.findRenderedDOMComponentWithClass(quote, 'component-quote')
    assert.equal(renderedQuote.textContent, 'I am content')
  })

  it('should render a danger quote', function () {
    const dangerQuote = TestUtils.renderIntoDocument(
      <Wrapper>
        <QuoteComponent purpose='danger'>This is dangerous</QuoteComponent>
      </Wrapper>
    )

    const renderedQuote = TestUtils.findRenderedDOMComponentWithClass(dangerQuote, 'danger')
    assert.isDefined(renderedQuote)
  })

  it('should render a success quote', function () {
    const successQuote = TestUtils.renderIntoDocument(
      <Wrapper>
        <QuoteComponent purpose='success'>This is information</QuoteComponent>
      </Wrapper>
    )

    const renderedQuote = TestUtils.findRenderedDOMComponentWithClass(successQuote, 'success')
    assert.isDefined(renderedQuote)
  })

  it('should render a quote with a cite', function () {
    const citeQuote = TestUtils.renderIntoDocument(
      <Wrapper>
        <QuoteComponent cite='Twitter' />
      </Wrapper>
    )

    const renderedQuote = TestUtils.findRenderedDOMComponentWithClass(citeQuote, 'component-quote')
    assert.equal(renderedQuote.textContent, 'Twitter')
  })

  it('should render a quote with an author', function () {
    const authorQuote = TestUtils.renderIntoDocument(
      <Wrapper>
        <QuoteComponent author='Timmy Test' />
      </Wrapper>
    )

    const renderedQuote = TestUtils.findRenderedDOMComponentWithClass(authorQuote, 'component-quote')
    assert.equal(renderedQuote.textContent, 'Timmy Test')
  })

  it('should render a quote with a role', function () {
    const roleQuote = TestUtils.renderIntoDocument(
      <Wrapper>
        <QuoteComponent role='Developer' />
      </Wrapper>
    )

    const renderedQuote = TestUtils.findRenderedDOMComponentWithClass(roleQuote, 'component-quote')
    assert.equal(renderedQuote.textContent, 'Developer')
  })

  it('should render a quote with a role', function () {
    const inlineQuote = TestUtils.renderIntoDocument(
      <Wrapper>
        <QuoteComponent type='inline'>Inline Quote</QuoteComponent>
      </Wrapper>
    )

    const renderedQuote = TestUtils.findRenderedDOMComponentWithClass(inlineQuote, 'inline')
    assert.equal(renderedQuote.textContent, 'Inline Quote')
  })
})

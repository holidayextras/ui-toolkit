'use strict';
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var assert = require('chai').assert;
var QuoteComponent = require('../../src/components/quote/quote.jsx');

describe('QuoteComponent', function() {

  it('should render an Quote', function() {
    var quote = TestUtils.renderIntoDocument(
      <QuoteComponent>I am content</QuoteComponent>
    );

    var renderedQuote = TestUtils.findRenderedDOMComponentWithClass(quote, 'component-quote');
    assert.equal(renderedQuote.textContent, 'I am content');

  });

  it('should render a danger quote', function() {
    var dangerQuote = TestUtils.renderIntoDocument(
      <QuoteComponent purpose="danger">This is dangerous</QuoteComponent>
    );

    var renderedQuote = TestUtils.findRenderedDOMComponentWithClass(dangerQuote, 'danger');
    assert.isDefined(renderedQuote);

  });

  it('should render a success quote', function() {
    var successQuote = TestUtils.renderIntoDocument(
      <QuoteComponent purpose="success">This is information</QuoteComponent>
    );

    var renderedQuote = TestUtils.findRenderedDOMComponentWithClass(successQuote, 'success');
    assert.isDefined(renderedQuote);

  });

  it('should render a quote with a cite', function() {
    var citeQuote = TestUtils.renderIntoDocument(
      <QuoteComponent cite="Twitter" />
    );

    var renderedQuote = TestUtils.findRenderedDOMComponentWithClass(citeQuote, 'component-quote');
    assert.equal(renderedQuote.textContent, 'Twitter');

  });

  it('should render a quote with an author', function() {
    var authorQuote = TestUtils.renderIntoDocument(
      <QuoteComponent author="Timmy Test" />
    );

    var renderedQuote = TestUtils.findRenderedDOMComponentWithClass(authorQuote, 'component-quote');
    assert.equal(renderedQuote.textContent, 'Timmy Test');

  });

  it('should render a quote with a role', function() {
    var roleQuote = TestUtils.renderIntoDocument(
      <QuoteComponent role="Developer" />
    );

    var renderedQuote = TestUtils.findRenderedDOMComponentWithClass(roleQuote, 'component-quote');
    assert.equal(renderedQuote.textContent, 'Developer');

  });

  it('should render a quote with a role', function() {
    var inlineQuote = TestUtils.renderIntoDocument(
      <QuoteComponent type="inline">Inline Quote</QuoteComponent>
    );

    var renderedQuote = TestUtils.findRenderedDOMComponentWithClass(inlineQuote, 'inline');
    assert.equal(renderedQuote.textContent, 'Inline Quote');

  });

});

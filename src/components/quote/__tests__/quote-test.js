/** @jsx React.DOM */

var React = require('react');
var AlertComponent = require('../code/views/quoteView.jsx');

describe('AlertComponent', function() {

  it('should render an Quote', function() {
    var quote = TestUtils.renderIntoDocument(
      <QuoteComponent>I am content</QuoteComponent>
    );

    var renderedAlert = TestUtils.findRenderedDOMComponentWithClass(quote, 'component-quote');
    assert.equal(renderedQuote.getDOMNode().textContent, 'I am content');

  });

});

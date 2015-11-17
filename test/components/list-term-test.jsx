'use strict';
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var assert = require('chai').assert;
var ListTerm = require('../../src/components/list-term/list-term.jsx');

describe('ListTermComponent ', function() {

  it('is an element', function() {
    assert.ok(TestUtils.isElement(<ListTerm />));
  });


  it('should render an list term with a class of component-list-term', function() {
    var ListInstance = TestUtils.renderIntoDocument(
      <ListTerm/>
    );

    var renderedListTerm = TestUtils.findRenderedDOMComponentWithClass(ListInstance, 'component-list-term');
    assert.equal(renderedListTerm.nodeName, 'DT');
  });

});

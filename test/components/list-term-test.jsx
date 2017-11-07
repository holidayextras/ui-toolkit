'use strict'
const React = require('react/addons')
const TestUtils = React.addons.TestUtils
const assert = require('chai').assert
const ListTerm = require('../../src/components/list-term/list-term.jsx')

describe('ListTermComponent ', function () {
  it('is an element', function () {
    assert.ok(TestUtils.isElement(<ListTerm />))
  })

  it('should render an list term with a class of component-list-term', function () {
    const ListInstance = TestUtils.renderIntoDocument(
      <ListTerm />
    )

    const renderedListTerm = TestUtils.findRenderedDOMComponentWithClass(ListInstance, 'component-list-term')
    assert.equal(renderedListTerm.nodeName, 'DT')
  })
})

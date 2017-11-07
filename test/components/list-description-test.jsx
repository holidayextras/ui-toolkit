'use strict'

const React = require('react/addons')
const TestUtils = React.addons.TestUtils
const assert = require('chai').assert
const ListDescription = require('../../src/components/list-description/list-description.jsx')
const Wrapper = require('../helpers/wrapper')

describe('ListDescriptionComponent ', function () {
  it('is an element', function () {
    assert.ok(TestUtils.isElement(<Wrapper><ListDescription /></Wrapper>))
  })

  it('should render an description list item with a class of component-list-description', function () {
    const ListInstance = TestUtils.renderIntoDocument(
      <Wrapper>
        <ListDescription />
      </Wrapper>
    )

    const renderedListDescription = TestUtils.findRenderedDOMComponentWithClass(ListInstance, 'component-list-description')
    assert.equal(renderedListDescription.nodeName, 'DD')
  })
})

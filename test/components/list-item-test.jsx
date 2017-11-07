'use strict'
const React = require('react/addons')
const TestUtils = React.addons.TestUtils
const assert = require('chai').assert
const ListItem = require('../../src/components/list-item/list-item.jsx')

describe('ListItemComponent ', function () {
  it('is an element', function () {
    assert.ok(TestUtils.isElement(<ListItem />))
  })

  it('should render an list item with a class of component-list-item', function () {
    const ListInstance = TestUtils.renderIntoDocument(
      <ListItem />
    )

    const renderedListItem = TestUtils.findRenderedDOMComponentWithClass(ListInstance, 'component-list-item')
    assert.equal(renderedListItem.nodeName, 'LI')
  })
})

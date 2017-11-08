'use strict'
const React = require('react')
const TestUtils = require('react-addons-test-utils')
const assert = require('chai').assert
const TileComponent = require('../../src/components/tile/tile.jsx')
const sinon = require('sinon')

describe('TileComponent', function () {
  let img

  beforeEach(function () {
    img = {
      src: 'foo',
      alt: 'bar'
    }
  })

  it('is an element', function () {
    const component = TestUtils.renderIntoDocument(
      <TileComponent image={img} />
    )

    assert.isDefined(component)
  })

  it('should render an img', function () {
    const tile = TestUtils.renderIntoDocument(
      <TileComponent image={img}>bar</TileComponent>
    )
    const renderedImg = TestUtils.scryRenderedDOMComponentsWithTag(tile, 'img')
    assert.equal(renderedImg.length, 1)
  })

  it('should render a tile-block', function () {
    const tile = TestUtils.renderIntoDocument(
      <TileComponent image={img}>bar</TileComponent>
    )
    const renderedTile = TestUtils.findRenderedDOMComponentWithClass(tile, 'component-tile-block')
    assert.isDefined(renderedTile)
  })

  it('should render any extra props passed to it on the containing div', function () {
    const onClickHandler = sinon.stub()
    const tile = TestUtils.renderIntoDocument(
      <TileComponent image={img} title='foo' onClick={onClickHandler} />
    )
    const renderedTile = TestUtils.findRenderedDOMComponentWithClass(tile, 'component-tile')
    TestUtils.Simulate.click(renderedTile)

    assert(onClickHandler.called)
  })
})

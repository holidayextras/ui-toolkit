'use strict'
var React = require('react')
var TestUtils = require('react-addons-test-utils')
var assert = require('chai').assert
var TileComponent = require('../../src/components/tile/tile.jsx')
var sinon = require('sinon')

describe('TileComponent', function () {
  var img

  beforeEach(function () {
    img = {
      src: 'foo',
      alt: 'bar'
    }
  })

  it('is an element', function () {
    var component = TestUtils.renderIntoDocument(
      <TileComponent image={img} />
    )

    assert.isDefined(component)
  })

  it('should render an img', function () {
    var tile = TestUtils.renderIntoDocument(
      <TileComponent image={img}>bar</TileComponent>
    )
    var renderedImg = TestUtils.scryRenderedDOMComponentsWithTag(tile, 'img')
    assert.equal(renderedImg.length, 1)
  })

  it('should render a tile-block', function () {
    var tile = TestUtils.renderIntoDocument(
      <TileComponent image={img}>bar</TileComponent>
    )
    var renderedTile = TestUtils.findRenderedDOMComponentWithClass(tile, 'component-tile-block')
    assert.isDefined(renderedTile)
  })

  it('should render any extra props passed to it on the containing div', function () {
    var onClickHandler = sinon.stub()
    var tile = TestUtils.renderIntoDocument(
      <TileComponent image={img} title='foo' onClick={onClickHandler} />
    )
    var renderedTile = TestUtils.findRenderedDOMComponentWithClass(tile, 'component-tile')
    TestUtils.Simulate.click(renderedTile)

    assert(onClickHandler.called)
  })
})

'use strict'

const React = require('react')
const TestUtils = require('react-addons-test-utils')
const assert = require('chai').assert
const ImageComponent = require('../../src/components/image/image.jsx')
const sinon = require('sinon')

describe('ImageComponent', function () {
  let src = null
  let alt = null
  let handleClick = null
  let handleLoad = null
  let imageInstance = null
  let renderedImage = null
  let anchorDOMNode = null
  let imageDOMNode = null
  let srcSet = null
  let sizes = null

  beforeEach(function () {
    src = 'foo'
    alt = 'bar'
    srcSet = '2000w.jpg 2000w, 1500w.jpg 1500w, 1000w.jpg 1000w, 500w.jpg 500w'
    sizes = '100vw'
    handleClick = sinon.spy()
    handleLoad = sinon.spy()
  })

  it('is an element', function () {
    assert.ok(TestUtils.isElement(<ImageComponent src={src} alt={alt} />))
  })

  describe('when an href is passed in', function () {
    let href = null

    beforeEach(function () {
      href = 'http://this.isa.link'
      imageInstance = TestUtils.renderIntoDocument(
        <ImageComponent src={src} alt={alt} handleClick={handleClick} handleLoad={handleLoad} href={href} />
      )
      renderedImage = TestUtils.findRenderedDOMComponentWithClass(imageInstance, 'component-image')
      anchorDOMNode = renderedImage
    })

    it('should render as an anchor', function () {
      assert.equal(anchorDOMNode.nodeName, 'A')
    })

    it('should call handleClick prop when clicked', function () {
      TestUtils.Simulate.click(anchorDOMNode)
      assert.ok(handleClick.calledOnce)
    })

    it('the image should call handleLoad when img is loaded', function () {
      imageDOMNode = TestUtils.findRenderedDOMComponentWithTag(imageInstance, 'img')
      TestUtils.Simulate.load(imageDOMNode)
      assert.ok(handleLoad.calledOnce)
    })

    it('should render an img tag inside the anchor', function () {
      assert.equal(anchorDOMNode.firstChild.nodeName, 'IMG')
    })

    it('the img should have the correct src attribute from props', function () {
      assert.equal(anchorDOMNode.firstChild.getAttribute('src'), 'foo')
    })

    it('the img should have the correct alt attribute from props', function () {
      assert.equal(anchorDOMNode.firstChild.getAttribute('alt'), 'bar')
    })

    describe('without a target', function () {
      it('should not include a target in the rendered anchor', function () {
        assert.isNull(imageDOMNode.getAttribute('target'))
      })
    })
  })

  describe('when a target is passed in', function () {
    beforeEach(function () {
      const href = 'http://this.isa.link'
      const target = '_blank'
      imageInstance = TestUtils.renderIntoDocument(
        <ImageComponent src={src} alt={alt} handleClick={handleClick} href={href} target={target} />
      )
      renderedImage = TestUtils.findRenderedDOMComponentWithClass(imageInstance, 'component-image')
      imageDOMNode = renderedImage
    })

    it('should include the target in the rendered anchor', function () {
      assert.equal(imageDOMNode.getAttribute('target'), '_blank')
    })
  })

  describe('when an href is not passed in', function () {
    beforeEach(function () {
      imageInstance = TestUtils.renderIntoDocument(
        <ImageComponent src={src} alt={alt} handleClick={handleClick} handleLoad={handleLoad} sizes={sizes} srcSet={srcSet} />
      )
      renderedImage = TestUtils.findRenderedDOMComponentWithClass(imageInstance, 'component-image')
      imageDOMNode = renderedImage
    })

    it('should render an img tag', function () {
      assert.equal(imageDOMNode.nodeName, 'IMG')
    })

    it('should have the correct src attribute from props', function () {
      assert.equal(imageDOMNode.getAttribute('src'), 'foo')
    })

    it('should have the correct alt attribute from props', function () {
      assert.equal(imageDOMNode.getAttribute('alt'), 'bar')
    })

    it('should call handleClick prop when clicked', function () {
      TestUtils.Simulate.click(imageDOMNode)
      assert.ok(handleClick.calledOnce)
    })

    it('should call handleLoad when img is loaded', function () {
      TestUtils.Simulate.load(imageDOMNode)
      assert.ok(handleLoad.calledOnce)
    })

    it('should render multiple responsive images', function () {
      assert.equal(imageDOMNode.getAttribute('srcset'), '2000w.jpg 2000w, 1500w.jpg 1500w, 1000w.jpg 1000w, 500w.jpg 500w')
    })

    it('should render a specified start image size', function () {
      assert.equal(imageDOMNode.getAttribute('sizes'), '100vw')
    })
  })
})

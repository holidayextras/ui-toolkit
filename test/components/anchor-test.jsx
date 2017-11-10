'use strict'

const React = require('react')
const TestUtils = require('react-addons-test-utils')
const sinon = require('sinon')
const assert = require('chai').assert
const Wrapper = require('../helpers/wrapper')

const Anchor = require('../../src/components/anchor/anchor.jsx')

describe('Anchor', function () {
  let data = null
  let title = null
  let href = null
  let clickHandler = null
  let target = null
  let instance = null
  let anchorDomNode = null

  beforeEach(function () {
    data = {
      'foo': 'bar',
      'x-y-z': 'zyx',
      'mooCow': 'baa'
    }
    title = 'test'
    href = 'google.com'
    clickHandler = sinon.spy()
    target = '_blank'

    instance = TestUtils.renderIntoDocument(
      <Wrapper>
        <Anchor data={data} title={title} href={href} handleClick={clickHandler} target={target} foo='bar'>test anchor</Anchor>
      </Wrapper>
    )

    const renderedAnchor = TestUtils.findRenderedDOMComponentWithTag(instance, 'a')
    anchorDomNode = renderedAnchor
  })

  it('is an element', function () {
    assert(TestUtils.isCompositeComponent(instance))
  })

  describe('with content', function () {
    it('should render an anchor', function () {
      assert.equal(anchorDomNode.nodeName, 'A')
    })

    describe('with data attributes', function () {
      it('spreads them and prefixes with \'data\'', function () {
        assert.equal(anchorDomNode.getAttribute('data-foo'), 'bar')
        assert.equal(anchorDomNode.getAttribute('data-x-y-z'), 'zyx')
        assert.equal(anchorDomNode.getAttribute('data-moo-cow'), 'baa')
      })
    })

    it('should have the correct title from props', function () {
      assert.equal(anchorDomNode.getAttribute('title'), title)
    })

    describe('with handleClick handler', function () {
      describe('on click', function () {
        beforeEach(function () {
          TestUtils.Simulate.click(anchorDomNode)
        })

        it('should call the handler', function () {
          assert(clickHandler.calledOnce)
        })
      })
    })

    it('should have the correct target from props', function () {
      assert.equal(anchorDomNode.getAttribute('target'), target)
    })
  })

  describe('without content', function () {
    beforeEach(function () {
      instance = TestUtils.renderIntoDocument(
        <Wrapper>
          <Anchor data={data} title={title} href={href} handleClick={clickHandler} />
        </Wrapper>
      )
    })
    it('does not render', function () {
      assert.equal(TestUtils.scryRenderedDOMComponentsWithTag(instance, 'a').length, 0)
    })
  })

  describe('without a href', function () {
    beforeEach(function () {
      instance = TestUtils.renderIntoDocument(
        <Wrapper>
          <Anchor data={data} title={title} handleClick={clickHandler} >Content</Anchor>
        </Wrapper>
      )
      const renderedAnchor = TestUtils.findRenderedDOMComponentWithTag(instance, 'a')
      anchorDomNode = renderedAnchor
    })
    it('defaults to #', function () {
      assert.equal(anchorDomNode.getAttribute('href'), '#')
    })
  })
})

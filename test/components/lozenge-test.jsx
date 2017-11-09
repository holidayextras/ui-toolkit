'use strict'

const React = require('react')
const TestUtils = require('react-addons-test-utils')
const assert = require('chai').assert
const Lozenge = require('../../src/components/lozenge/lozenge.jsx')
const Wrapper = require('../helpers/wrapper')

describe('Lozenge', function () {
  it('is an element', function () {
    assert.ok(TestUtils.isElement(<Wrapper><Lozenge /></Wrapper>))
  })

  it('renders a span', function () {
    const instance = TestUtils.renderIntoDocument(
      <Wrapper>
        <Lozenge tip='foo'>bar</Lozenge>
      </Wrapper>
    )
    assert.ok(TestUtils.findRenderedDOMComponentWithTag(instance, 'span'))
  })

  it('renders the children', function () {
    const rendered = TestUtils.renderIntoDocument(
      <Wrapper>
        <Lozenge tip='foo'>bar</Lozenge>
      </Wrapper>
    )
    assert.equal(TestUtils.findRenderedDOMComponentWithTag(rendered, 'span').innerHTML, 'bar')
  })

  describe('with tip', function () {
    beforeEach(function () {
      this.instance = TestUtils.renderIntoDocument(
        <Wrapper>
          <Lozenge tip='foo'>bar</Lozenge>
        </Wrapper>
      )
    })

    it('sets the tip as the title', function () {
      const el = TestUtils.findRenderedDOMComponentWithClass(this.instance, 'component-lozenge')
      assert.equal(el.getAttribute('title'), 'foo')
    })
  })

  describe('without tip', function () {
    beforeEach(function () {
      this.instance = TestUtils.renderIntoDocument(
        <Wrapper>
          <Lozenge>bar</Lozenge>
        </Wrapper>
      )
    })

    it('should not set a tip as the title', function () {
      const el = TestUtils.findRenderedDOMComponentWithClass(this.instance, 'component-lozenge')
      assert.equal(el.getAttribute('title'), null)
    })
  })

  describe('with purpose attribute', function () {
    describe('primary', function () {
      beforeEach(function () {
        this.instance = TestUtils.renderIntoDocument(
          <Wrapper>
            <Lozenge purpose='primary'>foo</Lozenge>
          </Wrapper>
        )
      })

      it('renders primary class', function () {
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'primary'))
      })
    })

    describe('success', function () {
      beforeEach(function () {
        this.instance = TestUtils.renderIntoDocument(
          <Wrapper>
            <Lozenge purpose='success'>foo</Lozenge>
          </Wrapper>
        )
      })

      it('renders success class', function () {
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'success'))
      })
    })

    describe('info', function () {
      beforeEach(function () {
        this.instance = TestUtils.renderIntoDocument(
          <Wrapper>
            <Lozenge purpose='info'>foo</Lozenge>
          </Wrapper>
        )
      })

      it('renders info class', function () {
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'info'))
      })
    })

    describe('warning', function () {
      beforeEach(function () {
        this.instance = TestUtils.renderIntoDocument(
          <Wrapper>
            <Lozenge purpose='warning'>foo</Lozenge>
          </Wrapper>
        )
      })

      it('renders warning class', function () {
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'warning'))
      })
    })

    describe('danger', function () {
      beforeEach(function () {
        this.instance = TestUtils.renderIntoDocument(
          <Wrapper>
            <Lozenge purpose='danger'>foo</Lozenge>
          </Wrapper>
        )
      })

      it('renders danger class', function () {
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'danger'))
      })
    })
  })
  describe('with size attribute', function () {
    describe('small', function () {
      beforeEach(function () {
        this.instance = TestUtils.renderIntoDocument(
          <Wrapper>
            <Lozenge size='small'>foo</Lozenge>
          </Wrapper>
        )
      })

      it('renders small class', function () {
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'small'))
      })
    })
    describe('medium', function () {
      beforeEach(function () {
        this.instance = TestUtils.renderIntoDocument(
          <Wrapper>
            <Lozenge size='medium'>foo</Lozenge>
          </Wrapper>
        )
      })

      it('renders medium class', function () {
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'medium'))
      })
    })
    describe('large', function () {
      beforeEach(function () {
        this.instance = TestUtils.renderIntoDocument(
          <Wrapper>
            <Lozenge size='large'>foo</Lozenge>
          </Wrapper>
        )
      })

      it('renders large class', function () {
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'large'))
      })
    })
    describe('extra-large', function () {
      beforeEach(function () {
        this.instance = TestUtils.renderIntoDocument(
          <Wrapper>
            <Lozenge size='extra-large'>foo</Lozenge>
          </Wrapper>
        )
      })

      it('renders extra-large class', function () {
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'extra-large'))
      })
    })
    describe('block', function () {
      beforeEach(function () {
        this.instance = TestUtils.renderIntoDocument(
          <Wrapper>
            <Lozenge size='block'>foo</Lozenge>
          </Wrapper>
        )
      })

      it('renders block class', function () {
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'block'))
      })
    })
  })
})

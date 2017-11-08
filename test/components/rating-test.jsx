'use strict'
const React = require('react')
const TestUtils = require('react-addons-test-utils')
const assert = require('chai').assert
const Rating = require('../../src/components/rating/rating.jsx')

describe('Rating', function () {
  describe('with a rating of 4 passed in', function () {
    it('is an element', function () {
      const component = TestUtils.renderIntoDocument(
        <Rating rating={4} />
      )
      assert.isDefined(component)
    })

    describe('with a child prop', function () {
      it('is an element', function () {
        const component = TestUtils.renderIntoDocument(
          <Rating rating={4}>X</Rating>
        )
        assert.isDefined(component)
      })
    })

    describe('with a child prop that is a component', function () {
      it('is an element', function () {
        const component = TestUtils.renderIntoDocument(
          <Rating rating={4}><div>X</div></Rating>
        )
        assert.isDefined(component)
      })
    })

    describe('with a blank icon prop', function () {
      it('is an element', function () {
        const component = TestUtils.renderIntoDocument(
          <Rating rating={4} outOf={5} blankIcon='X' />
        )
        assert.isDefined(component)
      })
    })

    describe('with a blank icon prop that is a component', function () {
      it('is an element', function () {
        const component = TestUtils.renderIntoDocument(
          <Rating rating={4} outOf={5} blankIcon={<div>X</div>} />
        )
        assert.isDefined(component)
      })
    })
  })
})

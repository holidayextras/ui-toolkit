'use strict'
const React = require('react')
const TestUtils = require('react-addons-test-utils')
const assert = require('chai').assert
const BasketItem = require('../../src/components/basket-item/basket-item.jsx')

describe('BasketItem', function () {
  describe('with no title', function () {
    it('should have no title node', function () {
      const basketItem = TestUtils.renderIntoDocument(<BasketItem />)
      assert.throws(function () {
        TestUtils.findRenderedDOMComponentWithClass(basketItem, 'component-basket-item-title')
      })
    })
  })

  describe('with no title', function () {
    it('should have no price node', function () {
      const basketItem = TestUtils.renderIntoDocument(<BasketItem price={123.45} />)
      assert.throws(function () {
        TestUtils.findRenderedDOMComponentWithClass(basketItem, 'component-basket-item-total')
      })
    })
  })

  describe('with a title', function () {
    describe('that is text', function () {
      it('should have a title node with the correct text', function () {
        const title = 'A title'
        const basketItem = TestUtils.renderIntoDocument(<BasketItem title={title} />)
        const renderedBasketItem = TestUtils.findRenderedDOMComponentWithClass(basketItem, 'component-basket-item-title')
        assert.equal(renderedBasketItem.textContent, title)
      })

      describe('and the toggleDescription property set to true', function () {
        let anchor
        const title = 'A title'
        before(function () {
          const basketItem = TestUtils.renderIntoDocument(<BasketItem title={title} toggleDescription />)
          const renderedBasketItem = TestUtils.findRenderedDOMComponentWithClass(basketItem, 'component-basket-item-title')
          anchor = renderedBasketItem.querySelector('a')
        })
        it('should have a title node that contains an anchor', function () {
          assert.equal(anchor.textContent, title)
        })

        it('the anchor should have an onClick handler function set', function () {
          assert.equal(typeof anchor.props.onClick, 'function')
        })
      })
    })

    describe('that is an element', function () {
      it('should have title node that contains the element passed in', function () {
        const title = <a>Title as an Element</a>
        const basketItem = TestUtils.renderIntoDocument(<BasketItem title={title} />)
        const renderedBasketItem = TestUtils.findRenderedDOMComponentWithClass(basketItem, 'component-basket-item-title')
        const anchor = renderedBasketItem.querySelector('a')
        assert.isDefined(anchor)
      })
    })
  })

  describe('with no price', function () {
    it('should have an empty total node', function () {
      const basketItem = TestUtils.renderIntoDocument(<BasketItem title='A Title' />)
      const renderedBasketItem = TestUtils.findRenderedDOMComponentWithClass(basketItem, 'component-basket-item-total')
      assert.equal(renderedBasketItem.textContent, '')
    })
  })

  describe('with a price', function () {
    it('should display the price passed in', function () {
      const basketItem = TestUtils.renderIntoDocument(<BasketItem title='A Title' price={123.45} />)
      const renderedBasketItem = TestUtils.findRenderedDOMComponentWithClass(basketItem, 'component-basket-item-total')
      assert.equal(renderedBasketItem.textContent, 123.45)
    })
  })

  describe('with a price of zero', function () {
    it('should have an empty total node', function () {
      const basketItem = TestUtils.renderIntoDocument(<BasketItem title='A Title' />)
      const renderedBasketItem = TestUtils.findRenderedDOMComponentWithClass(basketItem, 'component-basket-item-total')
      assert.equal(renderedBasketItem.textContent, '')
    })
  })

  describe('with a handleRemove property', function () {
    let handleRemove, anchor
    before(function () {
      handleRemove = function () {
        return null
      }
      const basketItem = TestUtils.renderIntoDocument(<BasketItem handleRemove={handleRemove} />)
      const renderedBasketItem = TestUtils.findRenderedDOMComponentWithClass(basketItem, 'component-basket-item-remove')
      anchor = renderedBasketItem.querySelector('a')
    })
    it('should have a remove node with an anchor as a child', function () {
      assert.isDefined(anchor)
    })

    it('should have an anchor with an onClick property set to the handleRemove function', function () {
      assert.equal(typeof anchor.props.onClick, 'function')
    })

    it('should have an anchor with the text set to the default removeText property', function () {
      assert.equal(anchor.textContent, 'remove')
    })
  })

  describe('with no children', function () {
    it('should have an empty description node', function () {
      const basketItem = TestUtils.renderIntoDocument(<BasketItem />)
      const renderedBasketItem = TestUtils.findRenderedDOMComponentWithClass(basketItem, 'component-basket-item-description')
      assert.equal(renderedBasketItem.textContent, '')
    })
  })

  describe('with children', function () {
    it('should have the children passed in as the content of the description node', function () {
      const basketItem = TestUtils.renderIntoDocument(<BasketItem>Foobar</BasketItem>)
      const renderedBasketItem = TestUtils.findRenderedDOMComponentWithClass(basketItem, 'component-basket-item-description')
      assert.equal(renderedBasketItem.textContent, 'Foobar')
    })
  })

  describe('with a toggleDescription property', function () {
    let description, titleLink
    before(function () {
      const basketItem = TestUtils.renderIntoDocument(<BasketItem toggleDescription title='Product 1' />)
      const titleContainer = TestUtils.findRenderedDOMComponentWithClass(basketItem, 'component-basket-item-title')
      titleLink = titleContainer.querySelector('a')
      description = TestUtils.findRenderedDOMComponentWithClass(basketItem, 'component-basket-item-description')
    })

    describe('when we have not clicked the title', function () {
      it('should have the description set to hidden', function () {
        assert.equal(description.props.style.display, 'none')
      })
    })

    describe('when the title is clicked', function () {
      it('should have the description set to block', function () {
        TestUtils.Simulate.click(titleLink)
        assert.equal(description.props.style.display, 'block')
      })
    })

    describe('when a title node is not passed', function () {
      it('should have the description set to block', function () {
        const basketItem = TestUtils.renderIntoDocument(<BasketItem toggleDescription />)
        description = TestUtils.findRenderedDOMComponentWithClass(basketItem, 'component-basket-item-description')
        assert.equal(description.props.style.display, 'block')
      })
    })
  })
})

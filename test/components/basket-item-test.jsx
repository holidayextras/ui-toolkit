'use strict';
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var assert = require('chai').assert;
var BasketItem = require('../../src/components/basket-item/basket-item.jsx');

describe('BasketItem', function() {

  it('should take the child & put it into the description  section', function() {
    var basketItem = TestUtils.renderIntoDocument(<BasketItem>I am content</BasketItem>);
    var renderedBasketItem = TestUtils.findRenderedDOMComponentWithClass(basketItem, 'component-basket-item-description');
    assert.equal(renderedBasketItem.getDOMNode().textContent, 'I am content');
  });

  it('should take the price property & put it into the price section', function() {
    describe('with the default currency symbol', function() {
      it('should return the price with the correct currency', function() {
        var basketItem = TestUtils.renderIntoDocument(<BasketItem price={123}>I am content</BasketItem>);
        var renderedBasketItem = TestUtils.findRenderedDOMComponentWithClass(basketItem, 'component-basket-item-price');
        assert.equal(renderedBasketItem.getDOMNode().textContent, '£123');
      });
    });

    describe('with a currency symbol passed in', function() {
      it('should return the price with the passed in currency symbol', function() {
        var basketItem = TestUtils.renderIntoDocument(<BasketItem price={456} currencySymbol="€">I am content</BasketItem>);
        var renderedBasketItem = TestUtils.findRenderedDOMComponentWithClass(basketItem, 'component-basket-item-price');
        assert.equal(renderedBasketItem.getDOMNode().textContent, '€456');
      });
    });
  });

});

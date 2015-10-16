'use strict';
var assert = require('chai').assert;
var getComponentClasses = require('../../src/utils/getComponentClasses');

describe('getComponentClasses', function() {

  describe('with invalid arguments', function() {

    it('display and error message when no arguments', function() {
      assert.throws(function() {
        getComponentClasses();
      }, 'Invalid default class');
    });

    it('display and error message when argument it not a strong', function() {
      assert.throws(function() {
        getComponentClasses(1);
      }, 'Invalid default class');
    });

    it('returns default class when propClasses is not an Array', function() {
      var result = getComponentClasses('component-button', 1);
      var expected = ['component-button'];
      assert.deepEqual(result, expected);
    });

    it('returns default class when props is not an Object', function() {
      var result = getComponentClasses('component-button', ['foo'], 1);
      var expected = ['component-button'];
      assert.deepEqual(result, expected);
    });
  });

  describe('with valid arguments', function() {

    it('returns specified classes from props using propClasses', function() {
      var propClasses = ['size', 'purpose'];
      var props = {
        purpose: 'primary',
        size: 'large',
        foo: 'bar'
      };
      var result = getComponentClasses('component-button', propClasses, props);
      var expected = ['component-button', 'large', 'primary'];
      assert.deepEqual(result, expected);
    });

    it('returns default class when propClasses and props are not provided', function() {
      var result = getComponentClasses('component-button');
      var expected = ['component-button'];
      assert.deepEqual(result, expected);
    });

  });

});

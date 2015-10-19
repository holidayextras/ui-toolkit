'use strict';
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var assert = require('chai').assert;
var Rating = require('../../src/components/rating/rating.jsx');

describe('Rating', function() {

  it('is an element', function() {
    assert.ok(TestUtils.isElement(<Rating rating={4} />));
  });

});

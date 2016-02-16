var ReactDataAttributesMixin = require('../index');
var assert = require('assert');

describe('React Data Attributes Mixin', function() {
  describe('When data is present', function() {
    var getDataAttributesFromPropsBoundWithData;

    beforeEach(function() {
      var context = {
        props: {
          data: {
            foo: 'foo',
            bar: 'bar',
            baz: 'baz',
            fooBar: 'foobar',
            foo_bar_baz: 'foobarbaz' //eslint-disable-line camelcase
          }
        }
      };
      getDataAttributesFromPropsBoundWithData = ReactDataAttributesMixin.getDataAttributesFromProps.bind(context);
    });

    it('returns a kebab case keyed object, prefixed with data-', function() {
      var expected = {
        'data-foo': 'foo',
        'data-bar': 'bar',
        'data-baz': 'baz',
        'data-foo-bar': 'foobar',
        'data-foo-bar-baz': 'foobarbaz'
      };
      var actual = getDataAttributesFromPropsBoundWithData();
      assert.deepEqual(actual, expected);
    });

  });
  describe('When no data is present', function() {
    var getDataAttributesFromPropsBoundWithoutData = ReactDataAttributesMixin.getDataAttributesFromProps.bind(context);

    beforeEach(function() {
      var context = {
        props: {}
      };
      getDataAttributesFromPropsBoundWithoutData = ReactDataAttributesMixin.getDataAttributesFromProps.bind(context);
    });

    it('returns an empty object', function() {
      var expected = {};
      var actual = getDataAttributesFromPropsBoundWithoutData();
      assert.deepEqual(actual, expected);
    });

  });
});

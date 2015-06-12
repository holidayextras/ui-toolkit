/** @jsx React.DOM */

var React = require('react/addons');
var IconListItemComponent = require('../code/views/IconListItemComponentView.jsx');
var TestUtils = React.addons.TestUtils;

describe('IconListItemComponent', function() {

  it('is an element', function() {
    assert.ok(TestUtils.isElement(<IconListItemComponent />));
  });

});

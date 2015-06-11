/** @jsx React.DOM */

jest.dontMock('../code/views/IconListItemComponentView.jsx');

var React = require('react/addons');
var IconListItemComponent = require('../code/views/IconListItemComponentView.jsx');
var TestUtils = React.addons.TestUtils;

describe('IconListItemComponent', function() {

  it('is an element', function() {
    expect(TestUtils.isElement(<IconListItemComponent />)).toBeTruthy();
  });

});
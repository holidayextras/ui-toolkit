'use strict';
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var assert = require('chai').assert;
var ListDescription = require('../../src/components/list-description/list-description.jsx');

describe('ListDescriptionComponent ', function() {

  it('is an element', function() {
    assert.ok(TestUtils.isElement(<ListDescription />));
  });


  it('should render an description list item with a class of component-list-description', function() {
    var ListInstance = TestUtils.renderIntoDocument(
      <ListDescription/>
    );

    var renderedListDescription = TestUtils.findRenderedDOMComponentWithClass(ListInstance, 'component-list-description');
    assert.equal(renderedListDescription.getDOMNode().nodeName, 'DD');
  });


});

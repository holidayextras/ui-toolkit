/** @jsx React.DOM */

jest.dontMock('../src/CustomComponent.jsx');

var React = require('react/addons');
var CustomComponent = require('../src/CustomComponent.jsx');
var TestUtils = React.addons.TestUtils;

describe('CustomComponent', function() {

  var instance = null;

  beforeEach(function() {
    instance = TestUtils.renderIntoDocument(
      <CustomComponent codeText="function foo() {}" />
    );
  });

  it('is an element', function() {
    expect(TestUtils.isElement(<CustomComponent codeText="foo" />)).toBeTruthy();
  });

  it('renders a CodeMirror', function() {
    var rendered = TestUtils.findRenderedDOMComponentWithClass(instance, 'playground');
    console.log(rendered.getDOMNode());
  });

});

 // expect(TestUtils.isElement(customComponent)).toBeTruthy();

    // var label = TestUtils.findRenderedDOMComponentWithTag(buttonView, 'button');
    // expect(label.getDOMNode().textContent).toEqual('Our HX Button');

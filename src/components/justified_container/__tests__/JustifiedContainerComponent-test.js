/** @jsx React.DOM */

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var JustifiedButtons = require('../code/views/JustifiedContainerComponentView.jsx');

describe("JustifiedContainer", function() {
  beforeEach(function(){
    this.instance = TestUtils.renderIntoDocument(<JustifiedButtons />);
    renderedElement = TestUtils.findRenderedDOMComponentWithClass(this.instance, 'component-justified-container');
    this.domNode = renderedElement.getDOMNode();
  });

  it('is an element', function(){
    assert.isTrue(TestUtils.isElement(<JustifiedButtons/>));
  });

  it('has styles for justifying content', function(){
    assert.equal(this.domNode.getAttribute('style'), 'display:flex;flex-direction:row;justify-content:space-between;');
  });

  describe('with children', function(){
    beforeEach(function(){
      this.instance = TestUtils.renderIntoDocument(
        <JustifiedButtons>
          <button>foo</button>
          <button>bar</button>
        </JustifiedButtons>
      );

      this.children = TestUtils.scryRenderedDOMComponentsWithTag(this.instance, 'button');
    });

    it('should render the children', function(){
      assert.equal(this.children[0].getDOMNode().innerHTML, 'foo');
      assert.equal(this.children[1].getDOMNode().innerHTML, 'bar');
    });
  });
});

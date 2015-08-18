var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var sinon = require('sinon');
var assert = require('chai').assert;

var Anchor = require('../code/views/anchorView.jsx');

describe("Anchor", function() {
  beforeEach(function(){
    this.data = {
      'foo': 'bar',
      'x-y-z': 'zyx'
    };
    this.title = 'test';
    this.href = 'google.com';
    this.handleClick = sinon.spy();

    this.instance = TestUtils.renderIntoDocument(
      <Anchor data={this.data} title={this.title} href={this.href} onClick={this.handleClick} foo="bar">test anchor</Anchor>
    );

    var renderedAnchor = TestUtils.findRenderedDOMComponentWithTag(this.instance, 'a');
    this.anchorDomNode = renderedAnchor.getDOMNode();
  });

  it('is an element', function(){
    assert(TestUtils.isCompositeComponent(this.instance));
  });

  describe('with content', function(){
    it('should render an anchor', function(){
      assert.equal(this.anchorDomNode.nodeName, 'A');
    });

    describe('with data attributes', function() {
      it('spreads them and prefixes with \'data\'', function(){
        assert.equal(this.anchorDomNode.getAttribute('data-foo'), 'bar');
        assert.equal(this.anchorDomNode.getAttribute('data-x-y-z'), 'zyx');
      });
    });

    it('should have the correct title from props', function(){
      assert.equal(this.anchorDomNode.getAttribute('title'), this.title);
    });

    describe('with onClick handler', function(){
      describe('on click', function(){
        beforeEach(function(){
          TestUtils.Simulate.click(this.anchorDomNode);
        });

        it('should call the handler', function(){
          assert(this.handleClick.calledOnce);
        });
      });
    });
  });

  describe('without content', function(){
    beforeEach(function(){
      this.instance = TestUtils.renderIntoDocument(
        <Anchor data={this.data} title={this.title} href={this.href} onClick={this.handleClick} ></Anchor>
      );
    });
    it('does not render', function(){
      assert.equal(TestUtils.scryRenderedDOMComponentsWithTag(this.instance, 'a').length, 0);
    });
  });

  describe('without a href', function(){
    beforeEach(function(){
      this.instance = TestUtils.renderIntoDocument(
        <Anchor data={this.data} title={this.title} onClick={this.handleClick} >Content</Anchor>
      );
      var renderedAnchor = TestUtils.findRenderedDOMComponentWithTag(this.instance, 'a');
      this.anchorDomNode = renderedAnchor.getDOMNode();
    });
    it('defaults to #', function(){
      assert.equal(this.anchorDomNode.getAttribute('href'), '#');
    });
  });
});

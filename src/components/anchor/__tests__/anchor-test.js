var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var sinon = require('sinon');
var assert = require('chai').assert;

var Anchor = require('../code/views/anchorView.jsx');

describe('Anchor', function() {

  var data = null;
  var title = null;
  var href = null;
  var clickHandler = null;
  var target = null;
  var instance = null;
  var anchorDomNode = null;

  beforeEach(function(){
    data = {
      'foo': 'bar',
      'x-y-z': 'zyx'
    };
    title = 'test';
    href = 'google.com';
    clickHandler = sinon.spy();
    target = 'blank';

    instance = TestUtils.renderIntoDocument(
      <Anchor data={data} title={title} href={href} handleClick={clickHandler} target={target} foo="bar">test anchor</Anchor>
    );

    var renderedAnchor = TestUtils.findRenderedDOMComponentWithTag(instance, 'a');
    anchorDomNode = renderedAnchor.getDOMNode();
  });

  it('is an element', function(){
    assert(TestUtils.isCompositeComponent(instance));
  });

  describe('with content', function(){
    it('should render an anchor', function(){
      assert.equal(anchorDomNode.nodeName, 'A');
    });

    describe('with data attributes', function() {
      it('spreads them and prefixes with \'data\'', function(){
        assert.equal(anchorDomNode.getAttribute('data-foo'), 'bar');
        assert.equal(anchorDomNode.getAttribute('data-x-y-z'), 'zyx');
      });
    });

    it('should have the correct title from props', function(){
      assert.equal(anchorDomNode.getAttribute('title'), title);
    });

    describe('with handleClick handler', function(){
      describe('on click', function(){
        beforeEach(function(){
          TestUtils.Simulate.click(anchorDomNode);
        });

        it('should call the handler', function(){
          assert(clickHandler.calledOnce);
        });
      });
    });

    it('should have the correct target from props', function(){
      assert.equal(anchorDomNode.getAttribute('target'), '_' + target);
    });

  });

  describe('without content', function(){
    beforeEach(function(){
      instance = TestUtils.renderIntoDocument(
        <Anchor data={data} title={title} href={href} handleClick={clickHandler} />
      );
    });
    it('does not render', function(){
      assert.equal(TestUtils.scryRenderedDOMComponentsWithTag(instance, 'a').length, 0);
    });
  });

  describe('without a href', function(){
    beforeEach(function(){
      instance = TestUtils.renderIntoDocument(
        <Anchor data={data} title={title} handleClick={clickHandler} >Content</Anchor>
      );
      var renderedAnchor = TestUtils.findRenderedDOMComponentWithTag(instance, 'a');
      anchorDomNode = renderedAnchor.getDOMNode();
    });
    it('defaults to #', function(){
      assert.equal(anchorDomNode.getAttribute('href'), '#');
    });
  });
});

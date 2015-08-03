/** @jsx React.DOM */

var React = require('react');
var ImageComponent = require('../code/views/imageView.jsx');
var sinon = require('sinon');

describe('ImageComponent', function() {

  var src = null;
  var alt = null;
  var handleClick = null;
  var imageInstance = null;
  var renderedImage = null;
  var imageDOMNode = null;

  beforeEach(function() {
    src = 'foo';
    alt = 'bar';
    handleClick = sinon.spy();
    imageInstance = TestUtils.renderIntoDocument(
      <ImageComponent src={src} alt={alt} handleClick={handleClick} />
    );
    renderedImage = TestUtils.findRenderedDOMComponentWithClass(imageInstance, 'component-image');
    imageDOMNode = renderedImage.getDOMNode();
  });

  it('is an element', function() {
    assert.ok(TestUtils.isElement(<ImageComponent src={src} alt={alt} />));
  });

  it('should render an img tag', function() {
    assert.equal(imageDOMNode.nodeName, 'IMG');
  });

  it('should have the correct src attribute from props', function() {
    assert.equal(imageDOMNode.getAttribute('src'), 'foo');
  });

  it('should have the correct alt attribute from props', function() {
    assert.equal(imageDOMNode.getAttribute('alt'), 'bar');
  });

  it('should call handleClick prop when clicked', function() {
    TestUtils.Simulate.click(imageDOMNode);
    assert.ok(handleClick.calledOnce);
  });

});

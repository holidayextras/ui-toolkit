/** @jsx React.DOM */

var React = require('React');
var ImageComponent = require('../code/views/imageView.jsx');

describe('ImageComponent', function() {

  it('should render an image', function() {

    var src = 'foo';
    var alt = 'bar';

    var image = TestUtils.renderIntoDocument(
      <ImageComponent src={src} alt={alt} />
    );

    var renderedImage = TestUtils.findRenderedDOMComponentWithClass(image, 'component-image');
    assert.isDefined(renderedImage);
  });

});

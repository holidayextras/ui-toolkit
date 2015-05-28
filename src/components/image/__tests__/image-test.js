/** @jsx React.DOM */

jest.dontMock('../code/views/imageView.jsx');

var React = require('react/addons');
var ImageComponent = require('../code/views/imageView.jsx');
var TestUtils = React.addons.TestUtils;

describe('ImageComponent', function() {

  it('should render an image', function() {

    var src = 'foo';
    var alt = 'bar';

    var image = TestUtils.renderIntoDocument(
      <ImageComponent src={src} alt={alt} />
    );

    var renderedImage = TestUtils.findRenderedDOMComponentWithClass(image, 'component-image');
    expect(renderedImage).toBeDefined();
  });

});

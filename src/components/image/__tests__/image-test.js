/** @jsx React.DOM */

jest.dontMock('../code/views/imageView.jsx');

var React = require('react/addons');
var ImageComponent = require('../code/views/imageView.jsx');
var TestUtils = React.addons.TestUtils;

describe('ImageComponent', function() {

  it('is an element', function() {

    var src = "http://www.vegetarian-shoes.co.uk/Portals/42/product/images/prd0683d04d-faaf-4826-a692-45d2e5cfbe3b.jpg";
    var alt = "Rob's Shoes";

    expect(TestUtils.isElement(<ImageComponent src={src} alt={alt} />)).toBeTruthy();

  });

});

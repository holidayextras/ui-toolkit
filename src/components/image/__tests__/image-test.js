/** @jsx React.DOM */

var ImageComponent = require('../code/views/imageView.jsx');

describe('ImageComponent', function() {

  it('is an element', function() {

    var src = 'http://www.vegetarian-shoes.co.uk/Portals/42/product/images/prd0683d04d-faaf-4826-a692-45d2e5cfbe3b.jpg';
    var alt = 'Shoes';

    assert.ok(TestUtils.isElement(<ImageComponent src={src} alt={alt} />));
  });

});

var React = require('react');
var UiComponentProductTileComponent = require('../code');

var image = {
  src: 'http://www.vegetarian-shoes.co.uk/Portals/42/product/images/prd0683d04d-faaf-4826-a692-45d2e5cfbe3b.jpg',
  alt: "Rob's Shoes"
};

React.render(<UiComponentProductTileComponent image={image} title={'Shoes'} />, document.body);
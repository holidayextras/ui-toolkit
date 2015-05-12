var React = require('react');
var ImageComponent = require('../code');

var src = 'http://www.vegetarian-shoes.co.uk/Portals/42/product/images/prd0683d04d-faaf-4826-a692-45d2e5cfbe3b.jpg';
var alt = 'Shoes';

React.render(<ImageComponent src={src} alt={alt} />, document.body);
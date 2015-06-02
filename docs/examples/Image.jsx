var image = {
  src: 'http://brand.holidayextras.com/img/product-dessert.jpg',
  alt: 'Delicious strawberry cheesecake'
};

var example = (
  <UIToolkit.Image src={image.src} alt={image.alt} className="component-image" />
);

React.render(example, mountNode);

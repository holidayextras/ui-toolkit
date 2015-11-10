var image = {
  src: 'http://brand.holidayextras.com/img/product-dessert.jpg',
  alt: 'Delicious strawberry cheesecake'
};

var example = (
  <UIToolkit.Image className="component-image" src={image.src} alt={image.alt} />
);

ReactDOM.render(example, mountNode);

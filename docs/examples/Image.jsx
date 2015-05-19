var image = {
  src: 'http://brand.holidayextras.com/img/product-magazine.jpg',
  alt: 'Magazine Reader'
};

var example = (
  <UIToolkit.Image src={image.src} alt={image.alt} className="component-image" />
);

React.render(example, mountNode);
var image = {
  src: 'http://brand.holidayextras.com/img/product-main.jpg',
  alt: 'Two course meal'
}

var example = (
  <UIToolkit.Tile image={image} title='Two course dinner' />
);

React.render(example, mountNode);

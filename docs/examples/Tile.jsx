var image = {
  src: 'http://brand.holidayextras.com/img/product-main.jpg',
  alt: 'Two course meal'
}

var tileInstance = (
  <UIToolkit.Tile image={image} title='Two course dinner' />
);

React.render(tileInstance, mountNode);

var image = {
  src: 'http://brand.holidayextras.com/img/product-main.jpg',
  alt: 'Tender sirloin steak with blue cheese dressing'
}

var example = (
  <UIToolkit.Tile image={image} title='Two course dinner' />
);

React.render(example, mountNode);

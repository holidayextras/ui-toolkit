var image = {
  src: 'http://placehold.it/800x400',
  alt: 'Product tile'
};

var example = (
  <UIToolkit.ProductTile image={image} />
);

React.render(example, mountNode);

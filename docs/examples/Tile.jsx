var image = {
  src: 'http://brand.holidayextras.com/img/product-main.jpg',
  alt: 'Succulent beef'
};

var helloWorld = function() {
  alert('hello world');
};

var tileInstance = (
  <UIToolkit.Tile image={image} title='Succulent beef'>
    <UIToolkit.Flag right bottom success>This is the flag text</UIToolkit.Flag>
    <p>Some really good sales text</p>
    <UIToolkit.BootstrapButton onClick={helloWorld}>Book</UIToolkit.BootstrapButton>
  </UIToolkit.Tile>
);

React.render(tileInstance, mountNode);

var image = {
  srcSet: '/assets/component-image/panda2000.jpg 2000w, /assets/component-image/panda1500.jpg 1500w, /assets/component-image/panda1000.jpg 1000w, /assets/component-image/panda500.jpg 500w',
  src: '/assets/component-image/panda.jpg',
  alt: 'Delicious strawberry cheesecake'
};

var example = (
  <UIToolkit.Image className="component-image" src={image.src} sizes="100vw" srcSet={image.srcSet}  alt={image.alt} />
);

React.render(example, mountNode);

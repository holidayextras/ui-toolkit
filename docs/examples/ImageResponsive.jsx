var image = {
  srcSet: 'https://open-source.holidayextras.com/ui-toolkit/images/panda2000.jpg 2000w, https://open-source.holidayextras.com/ui-toolkit/images/panda1500.jpg 1500w, https://open-source.holidayextras.com/ui-toolkit/images/panda1000.jpg 1000w, https://open-source.holidayextras.com/ui-toolkit/images/panda500.jpg 500w',
  src: 'https://open-source.holidayextras.com/ui-toolkit/images/panda500.jpg',
  alt: 'A cute panda'
};

var example = (
  <UIToolkit.Image className="component-image" src={image.src} sizes="100vw" srcSet={image.srcSet}  alt={image.alt} />
);

ReactDOM.render(example, mountNode);
